script "org.openxtalk.library.generalmusic"

on extensionInitialize
   if the target is not me then
      pass extensionInitialize
   end if
   insert the script of me into back
   if the environment contains "development" then
      set the _ideoverride of me to true
   end if
   __Initialize
end extensionInitialize

on extensionFinalize
   if the target is not me then
      pass extensionFinalize
   end if
   remove the script of me from back
end extensionFinalize

/**

Title: OpenXTalk.org General Music Library

Version: 1.0.0

Author: OpenXTalk.org

Description:
The General Music script library contains handlers for various musicality
related tasks. Currently this incorporates a slightly modified version of UDI's
makeSMF library for creating MIDI data from xTalk 'ABC' style text music notation,
handlers for reading patch information from SoundFont2 and Douwnloadable Sounds
files (.sf2 / .dls), handlers for coverting MIDI numeric values to and from
human readable names (for example a MIDI note number to/from an
actual note name/octave), functions for reading and  writing MIDI files to and from
human readable timestampled event lists, handlers for converting time measurements
(such as Beats Per Minute to Milliseconds), and more!

The plan is to add a few more soon as well, such as incorporate music related
SVG-Icon family which would include icons such as note-duration symbols
for use in creating GUIs for musical stacks.
The intention is that this library will grow to include many
more useful music and sound composition related scripts.
*/

/**
Name: generalMusicLibVersion

Type: function

Syntax: generalMusicLibVersion()

Summary: Get the General Music Library version number.

Introduced: 1.0

OS: mac,win,linux,ios,android

Platforms: desktop,mobile

Example:
put "Version:" && generalMusicLibVersion()

Returns: The version number of the General Music Library.

Description:
Use the <generalMusicLibVersion> function get the version number of the library.

Tags: Music, MIDI, audioClip

*/
function generalMusicLibVersion
   return "1.0"
end generalMusicLibVersion


global defaultSoundBank, selectedSoundBank, instrumentNames
private command __Initialize
   get line 1 of scanStdSoundBankDirectories()
   if it <> empty then
      put it into defaultSoundBank
      put defaultSoundBank into selectedSoundBank
   end if
   if there is not a file selectedSoundBank then
      put GetHyperSoundsFont() into selectedSoundBank
   end if
   if the platform is "Linux" then
      if "fluidsynth" is in the loadedExtensions then
         try
            if fsEnsureInitialize() then
               fsMIDIPlayerInit
               -- put "FluidSynth Initialized"
               get fsLoadSoundFont(defaultSoundBank)
            end if
         end try
      end if
   end if
   put gsInstrumentNames(false,"list") into instrumentNames
end __Initialize


/**
Name: GetHyperSoundsFont

Type: function

Syntax: GetHyperSoundsFont()

Summary: Retrieve the path to the HyperSounds font included with General Music Library resources.

Introduced: 1.0

OS: mac,win,linux,ios,android

Platforms: desktop,mobile

Example:
put GetHyperSoundsFont() into tSoundFontPath

Returns: path to the HyperSounds soundfont included with General Music.
This is a tiny sound bank consisting of only 3 patches

Description:
Retrieve the path to the HyperSounds soundfont included with General Music.
HyperSounds is a tiny soundbank consisting of only the three sound patches based on the
three sounds included with the original xTalk IDE, HyperCard.
The sounds are 1) Harpsichord or HypsiChord, 2) Flute or HyperFlute, and 3) Boing
or HyperBoing. You can select these sounds by name when using the PlayPMD command.

Tags: Music, MIDI, audioClip, HyperCard
*/
function GetHyperSoundsFont
   set the itemDelimiter to slash
   get the effective filename of me -- this stack
   put item 1 to -2 of it into tFolder
   put "/resources/HyperSounds.sf2" after tFolder
   -- put tFolder
   return tFolder
end GetHyperSoundsFont

---- makeSMF (PM modded version) ---
-- originally by UDI --
----------------playPmd script by UDI 2002.12.08-------------
-- playPmd notes, playTempo, defInst
-- param notes = Score string to play or make SMF.
---- if "stop" is passed then stop current music, and enable "play" btn, disable "stop" btn.
---- if "clear" is passed then do "stop" job, and delete temporary mid file.
-- param 2 playTempo = makeSMF's 2nd param.
-- param 3 defInst = makeSMF's 3rd param.
-- This handler need "makeSMF" handler.
-----------------------------------------------------
-- 2002.10.03 idle -> send-in
-- 2002.12.06 tempFile in TemporaryFolder
-----------------------------------------------------
-- 1.3.4 2018.09 patch for command-line MIDI Player  / 4th param added to MIDI app name
-- 1.3.5 2018.10 bug fixed: playPmd shell( killall )
-----------------------------------------------------

------------------------------ playPMD as a videoClip (works on Android 2+) ---------------------------------------------
/**
Name: playPMD

Type: command

Syntax: playPMD [<pInstrumentName>],pPlaySentenceMusicalData,[<pTempoBPM>],[<pProgramNumber>],[<pShellpAppPath>]

Summary: plays the Playsentence Musical Data (PMD) starting at the specified tempo
in beats per minute, with the given sound patch number, using the current best
playback available on the current platform.

Introduced: 1.0

OS: mac,ios,android,linux,windows

Platforms: desktop, mobile

Parameters:

pPlaySentenceMusicalData: string containing extended-HyperTalk / xTalk 'ABC' textual music notation.

pTempoBPM: Intitial playback tenmpo in Beats Per Minute, this may be overridden

pProgramNumber: number in range 0-127 is the sound patch to use as the initial
or default instrument sound. This nay be overridden by patchchange messages within
the playSentence string.

Example:
playPMD "C4q Ee. Gs..",120,1

Description:
plays the Playsentence Musical Data (PMD) starting at the specified tempo
in beats per minute, with the given sound patch number, using the current best
playback available on the current platform.

Tags: Music, MIDI, audioClip
**/

-- Synonym for PlayPMD
on PerformMusicData pParam1, pParam2, pParam3, pParam4, pParam5, pParam6
   playPMD pParam1, pParam2, pParam3, pParam4, pParam5, pParam6
end PerformMusicData

on playPMD pParam1, pParam2, pParam3, pParam4, pParam5, pParam6
   -- put pParam1, pParam2, pParam3, pParam4, pParam5, pParam6
   put 0 into bankNum
   put 0 into instNum
   put 120 into playTempo
   PUT empty into tNotes
   if the paramCount > 1 then
      repeat with x = 1 to the paramCount
         -- put empty into tParam
         put param(x) into tParam
         -- GeneralMusic lib fallback sounds (from HyperCard)
         if tParam is among the items of "Boing,HyperBoing,Flute,HyperFlute,Harpsichord,Hypsichord" then
            put getHyperSoundsFont() into soundBankFile
            switch tParam
               case "Boing"
               case "HyperBoing"
                  put 3 into instNum
                  break
               case "Flute"
               case "HyperFlute"
                  put 2 into instNum
                  break
               case "Harpsichord"
               case "Hypsichord"
               default
                  put 1 into instNum
                  break
            end switch
            next repeat
         else
            if tParam is in instrumentNames then -- check if it's a General MiDI sound name
               get lineoffset(tParam,instrumentNames,0)
               if it <> 0 then
                  put it - 1  into instNum
                  next repeat
               else
                  -- put 0 into instNum
                  next repeat
               end if
            end if
         end if
         if word 1 of tParam is "tempo" or word 1 of tParam is "Tempo" then
            get word 2 of tParam
            if it > 0 and it < 481 then
               put it into playTempo
            end if
            next repeat
         end if
         if tParam contains "/" then
            if char -1 to -4 of tParam = ".sf2" or char -1 to -4 of tParam = ".dls" then
               put tParam into soundBankFile
            else
               put tParam into midiAppName
            end if
            next repeat
         end if
         -- if tParam <> empty then
         if tParam <> empty and tNotes is "" then
            put tParam into tNotes
            next repeat
         end if
      end repeat
   else
      if param(1) is not empty then
         put param(1) into tNotes
      else
         put "C4q" into tNotes
      end if
   end if
   if tNotes="" then put "C4q" into tNotes
   if ( midiAppName is NOT empty ) then
      playPmd_Shell tNotes, playTempo, instNum, midiAppName
      exit playPMD
   end if
   -- if soundBankFile is empty then put defaultSoundBank into soundBankFile
   if soundBankFile is empty then
      if defaultSoundBank is not empty then
         put defaultSoundBank into soundBankFile
      end if
   end if
   -- put tNotes, playTempo,instNum,bankNum, soundBankFile
   switch platform()
      -- The possible values returned by the platform function are:
      -- "Win32" on any version of Windows
      -- "Linux" on all Linux distributions
      -- "MacOS" on any version of Mac OS X
      -- "iphone" on iPhones, iPads and other iOS devices
      -- "android" on smartphones, tablets and other Android devices
      -- "HTML5" when running in a web browser
      case "MacOS" -- or ( myOS contains "win" ) then
         -- set the itemDel to "."
         -- if ( item 1 of qtVersion() < 10 )  then  -- QuickTime MIDI is dead
         get the loadedExtensions
         if it contains "avmidiplay" then
            playPMD_AVMIDIPlayer tNotes,playTempo,instNum,bankNum,soundBankFile
         else if it contains "fluidSynth" then
            if fsEnsureInitialize() then
               -- put "FluidSynth Initialized"
               playPMD_FluidSynth tNotes, playTempo,instNum,bankNum, soundBankFile
            end if
         end if
         break
      case "iphone"
         get the loadedExtensions
         if it contains "avmidiplay" then
            playPMD_AVMIDIPlayer tNotes, playTempo, instNum, soundBankFile
         end if
         break
      case "android"
         playPMD_videoClip tNotes, playTempo, instNum
         break
      case "Linux"
         get the loadedExtensions
         if it contains "fluidsynth" then
            playPMD_FluidSynth tNotes, playTempo, instNum, bankNum, soundBankFile
         else
            playPMD_Shell tNotes, playTempo, instNum, midiAppName
         end if
         break
      case "Win32"
         get the loadedExtensions
         if it contains "fluidsynth" then
            playPMD_FluidSynth tNotes, playTempo, instNum, bankNum, soundBankFile
         else
            -- playPMD_videoClip tNotes, playTempo, instNum, midiAppName
            -- another method to play MIDI on Win32 is using MCISendString(MCICommand)
            playPMD_MCISendString tNotes, playTempo, instNum
         end if
         break
      default
         break
   end switch
end playPmd

/**
Name: playPMD_videoClip

Type: command

Syntax: playPMD_videoClip pPlaySentenceMusicalData,[<pTempoBPM>],[<pProgramNumber>]

Summary: plays the Playsentence Musical Data (PMD) starting at the specified tempo
in beats per minute, with the given sound patch number, using the current operating
system's media play APIs, which must support MIDI in order for playback to be heard.

Introduced: 1.0

OS: android,linux,windows

Platforms: desktop, mobile

Parameters:

pPlaySentenceMusicalData: string containing extended-HyperTalk / xTalk 'ABC' textual music notation.

pTempoBPM: Intitial playback tenmpo in Beats Per Minute, this may be overridden

pProgramNumber: number in range 0-127 is the sound patch to use as the initial
or default instrument sound. This nay be overridden by patchchange messages within
the playSentence string.

Example:
playPMD_videoClip ("C4q Ee. Gs..",120,1)

Description:
plays the Playsentence Musical Data (PMD) starting at the specified tempo
in beats per minute, with the given sound patch number, using the current operating
system's media play APIs, which must support MIDI in order for playback to be heard.

Tags: Music, MIDI, audioClip
**/
on playPMD_videoClip tNotes, playTempo, instNum
   put specialFolderPath( "Temporary" ) & "/playPmdTemp.mid" into tempFilePath
   if ( tNotes is "stop" ) or ( tNotes is "clear" ) then
      try
         play stop vc tempFilePath
      end try
      if tNotes is "clear" then
         delete file tempFilePath
      end if
      setPlayBtn false
   else
      try
         stop playing vc tempFilePath
      end try
      makeSMF tNotes, playTempo, instNum, tempFilePath
      play vc tempFilePath
      if the result contains "no" then
         answer the result
         playPmd "clear"
         exit playPMD_videoClip
      end if
      setPlayBtn true
      checkPlayEndVC
   end if
end playPMD_videoClip

on checkPlayEnd_videoClip
   if movie() is "done" then
      setPlayBtn false
   else
      send "checkPlayEndVC" to me in 30 ticks
   end if
end checkPlayEnd_videoClip

------------------------------------------------ playPMD using a shell app ------------------------------------------

/**
Name: playPMD_Shell

Type: command

Syntax: playPMD_Shell pPlaySentenceMusicalData,[<pTempoBPM>],[<pProgramNumber>],[<pShellpAppPath>]

Summary: Plays the Playsentence Musical Data (PMD) starting at the specified tempo
in beats per minute, with the given sound initial patch number, using the shell app at a provided path.

Introduced: 1.0

OS: mac,ios,android,linux,windows

Platforms: desktop, mobile

Parameters:

pPlaySentenceMusicalData: string containing extended-HyperTalk / xTalk 'ABC' textual music notation.

pTempoBPM: Intitial playback tenmpo in Beats Per Minute, this may be overridden

pProgramNumber: number in range 0-127 is the sound patch to use as the initial
or default instrument sound. This nay be overridden by patchchange messages within
the playSentence string.

pShellpAppPath: the path to a player shell app to pass a generated MIDI file to for playback.

Example:
playPMD_Shell "C4q Ee. Gs..",120,1,"/Path/To/WildMIDI"

Description:
Plays the Playsentence Musical Data (PMD) starting at the specified tempo
in beats per minute, with the given sound initial patch number, using the shell app at a provided path.

Tags: Music, MIDI, audioClip
**/
local playPmdMidiApp
on playPMD_Shell tNotes, playTempo, instNum, midiAppName
   if ( midiAppName is not empty ) then
      put midiAppName into playPmdMidiApp
   else
      try
         if ( first char of shell( "which wildmidi" ) is "/" ) then
            put "wildmidi" into playPmdMidiApp
         else
            if ( first char of shell( "which timidity" ) is "/" ) then
               put "timidity" into playPmdMidiApp
            end if
         end if
      end try
   end if
   --
   put specialFolderPath( "Temporary" ) & "/playPmdTemp.mid" into tempFilePath
   if ( tNotes is "stop" ) or ( tNotes is "clear" ) then
      try
         get shell( "killall" && playPmdMidiApp )
      end try
      if tNotes is "clear" then
         delete file tempFilePath
      end if
      setPlayBtn false
   else
      if ( playPmdMidiApp is empty ) then
         answer "Not found MIDI player"
         playPmd "clear"
         exit playPMD_Shell
      end if
      get shell( "killall" && playPmdMidiApp )
      makeSMF tNotes, playTempo, instNum, tempFilePath
      put "echo '" & playPmdMidiApp &&quote& tempFilePath &quote& "' | at now" into shellCmd --Lx
      get shell( shellCmd )
      setPlayBtn true
      send "checkPlayEndShell" to me in 3sec
   end if
end playPMD_Shell

on checkPlayEnd_Shell
   --1.3.5 if ( shell( "killall -0" && playPmdMidiApp ) is NOT empty ) then
   if ( shell( "killall -0" && playPmdMidiApp ) contains "found" ) then -- 1.3.5
      setPlayBtn false
   else
      send "checkPlayEndShell" to me in 30 ticks
   end if
end checkPlayEnd_Shell

----------------------------- playPMD using a MCISendString (Windows only) --------------------------
/**
Name: playPMD_MCISendString

Type: command

Syntax: playPMD_MCISendString pPlaySentenceMusicalData, pTempoBPM,[pProgramNumber,[<pSoundBankFile>]

Summary: plays the Playsentence Musical Data (PMD) starting at the specified beats per minute,
with the given sound patch number using MCISendString to playback on Windows default MIDI Player.

Introduced: 1.0

OS: windows

Platforms: desktop

Parameters:

pPlaySentenceMusicalData: string containing extended-HyperTalk / xTalk 'ABC' textual music notation.

pTempoBPM: Intitial playback tenmpo in Beats Per Minute, this may be overridden

pProgramNumber: number in range 0-127 is the sound patch to use as the initial
or default instrument sound. This nay be overridden by patchchange messages within
the playSentence string.

Example:
playPMD_MCISendString ("C4q Ee. Gs..",120,1)

Description:
Attempts to play the Playsentence Music Data (PMD), optionally starting at the specified tempo
in beats per minute, optionally with a given MIDI patch number (need to add 'bank-patch' suport).
The default values are 120(BPM) and sound patch 1 (GM "Piano 1"), using MCISendString to
playback on Windows default MIDI Player

Tags: Music, MIDI, audioClip

**/
on playPMD_MCISendString tNotes, playTempo, instNum
   playPMD_MCISendString_Stop
   put specialFolderPath( "Temporary" ) & "/playPmdTemp.mid" into tempFilePath
   if ( tNotes is "stop" ) or ( tNotes is "clear" ) then
      try
         playPMD_MCISendString_Stop
      end try
      if tNotes is "clear" then
         delete file tempFilePath
      end if
      setPlayBtn false
   else
      makeSMF tNotes, playTempo, instNum, tempFilePath
      put mciSendString("open "&quote& tempFilePath &quote&" type sequencer alias myMIDI") into dummy # alias <instanceName> allows us to refer to this instance by a short name
      put mciSendString("play myMIDI") into dummy
      setPlayBtn true
   end if
end playPMD_MCISendString

on playPMD_MCISendString_Stop
   put mciSendString("stop myMIDI") into dummy
   put mciSendString("close all") into dummy
end playPMD_MCISendString_Stop

-------------------------------------- playPMD using a AVMIDIPLayer (macOS & iOS) ------------------------------------------
/**
Name: playPMD_AVMIDIPlayer

Type: command

Syntax: playPMD_AVMIDIPlayer pPlaySentenceMusicalData, pTempoBPM,[pProgramNumber,[<pSoundBankFile>]

Summary: plays the Playsentence Musical Data (PMD) starting at the specified beats per minute,
with the given sound patch number using Apple's AVMIDIPlayer API.

Introduced: 1.0

OS: mac,ios

Platforms: desktop,mobile

Parameters:

pPlaySentenceMusicalData: string containing extended-HyperTalk / xTalk 'ABC' textual music notation.

pTempoBPM: Intitial playback tenmpo in Beats Per Minute, this may be overridden

pProgramNumber: number in range 0-127 is the sound patch to use as the initial
or default instrument sound. This nay be overridden by patchchange messages within
the playSentence string.

pSoundBankFile: An optional filePath to a soundBank (.sf2 or .dls) file to use for playback.

Example:
playPMD_AVMIDIPlayer ("C4q Ee. Gs..",120,1)

Description:
Attempts to play the Playsentence Music Data (PMD), optionally starting at the specified tempo
in beats per minute, optionally with a given MIDI patch number (need to add 'bank-patch' suport),
with the optionally provided Soubdbank (.sf2 or .dls) file. The default values are 120(BPM)
and sound patch 1 (GM "Piano 1"),loading the first SoundBankFile found in default locations.
On macOS this should load the default Roland GS Soundbank, a small Soundbank
from the 1990s that came with QuickTime v2.5+, on iOS no default soundbank is provided
by the OS and so one must be provided.
PLEASE NOTE that this command will do nothing (fail silently) if the AVMIDIPLayer
builder extension is not loaded therefore scripts should check for the presence of
the AVMIDIPLayer libray before calling this command directly, or use the platform aware
version, PlayPMD which should try to use the best musical playback engine currenlty availble.

Tags: Music, MIDI, audioClip
**/
on playPMD_AVMIDIPlayer tNotes, playTempo, instNum, bankNum, soundBankFile
   -- put tNotes, playTempo, instNum, bankNum, soundBankFile
   -- set dontUseQT to false -- long time Deprecated now -- PM 2/10/22
   put specialFolderPath( "Temporary" ) & "/playPmdTemp.mid" into tempFilePath
   if ( tNotes is "stop" ) or ( tNotes is "clear" ) then
      try
         AVMIDIplayerStop
      end try
      if tNotes is "clear" then
         delete file tempFilePath
      end if
      --setPlayBtn false
   else
      try
         AVMIDIplayerStop
      end try
      makeSMF tNotes, playTempo, instNum, tempFilePath
      -- get scanStdSoundBankDirectories()
      -- if it is not empty then
      --  put line 1 of it into tSoundBank
      if soundBankFile is empty then put defaultSoundBank into soundBankFile
      try
         AVMIDIPlayerLoad tempFilePath,soundBankFile
         -- put tSoundBank
         -- set the thumbPosition of scrollbar "ScrubberBar" to 0
         -- set the endValue of scrollbar "ScrubberBar" to AVMIDIPlayerDuration()
         -- put SecsToHrsMinSecs(0) into fld "FileCurrentPosition"
         -- put SecsToHrsMinSecs(AVMIDIPlayerDuration()) -- into fld "FileDuration"
         -- AVMIDIPlayerSetRate(the thumbPosition of scrollbar "Playback Rate")
         AVMIDIPlayerSetRate 1.0
         -- lock screen
         AVMIDIPlayerPlay
         -- AVMIDIPlayerPlayWithCallback
         -- playPositionCheck
      end try
   end if
end playPMD_AVMIDIPlayer

on setPlayBtn toPlay
try
   set the enabled of btn "Play" to ( not toPlay )
end try
try
   set the enabled of btn "Stop" to ( toPlay )
end try
end setPlayBtn

   -------------------------------------- playPMD using FluidSynth (macOS, Windows, Linux, Android) ------------------------------------------
   /**
   Name: playPMD_FluidSynth

   Type: command

   Syntax: playPMD_FluidSynth pPlaySentenceMusicalData,[<pTempoBPM>],[<pProgramNumber>],[<pSoundBankFile>]

   Summary: plays the Playsentence Musical Data (PMD) starting at the specified beats per minute,
   with the given sound patch number using the FluidSynth engine.

   Introduced: OXT 1.963.1

   OS: mac,ios,win,linux

   Platforms: desktop,mobile

   Parameters:

   pPlaySentenceMusicalData: string containing extended-HyperTalk / xTalk 'ABC' textual music notation.

   pTempoBPM: Intitial playback tenmpo in Beats Per Minute, this may be overridden

   pProgramNumber: number in range 0-127 is the sound patch to use as the initial
   or default instrument sound. This nay be overridden by patchchange messages within
   the playSentence string.

   pSoundBankFile: An optional filePath to a soundBank (.sf2 or .dls) file to use for playback.

   Example:
   playPMD_FluidSynth ("C4q Ee. Gs..",120,1)

   Description:
Attempts to play the Playsentence Music Data (PMD), optionally starting at the specified tempo
in beats per minute, optionally with a given MIDI patch number (need to add 'bank-patch' suport),
with the optionally provided Soubdbank (.sf2 or .dls) file. The default values are 120(BPM)
and sound patch 1 (GM "Piano 1"), loading the first SoundBankFile found in the default
locations for the current OS. If no soundBank file is available then the fallback
FreeFont.sf2 soundbank, included with the OXT FuildSynth library, will be used.

PLEASE NOTE that this command will do nothing (fail silently) if the AVMIDIPLayer
builder extension is not loaded therefore scripts should check for the presence of
the AVMIDIPLayer libray before calling this command directly, or use the platform aware
version, PlayPMD which should try to use the best musical playback engine currenlty availble. \Tags: Music, MIDI, audioClip

**/
on playPMD_FluidSynth tNotes, playTempo, instNum, bankNum, soundBankFile
   -- set dontUseQT to false -- long time Deprecated now -- PM 2/10/22
   put specialFolderPath( "Temporary" ) & "/playPmdTemp.mid" into tempFilePath
   if ( tNotes is "stop" ) or ( tNotes is "clear" ) then
      try
         fsMIDIplayerStop
      end try
      if tNotes is "clear" then
         delete file tempFilePath
      end if
   else
      makeSMF tNotes, playTempo, instNum, tempFilePath
      try
         fsMIDIplayerStop
      end try
      -- get scanStdSoundBankDirectories()
      -- if it is not empty then
      --    put line 1 of it into tSoundBank
      -- if soundBankFile is empty then put defaultSoundBank into soundBankFile
      try
         fsMIDIPlayerInit
         if soundBankFile <> defaultSoundBank then
            get fsLoadSoundFont(soundBankFile)
            --  put it
         end if
         fsLoadMIDIFile tempFilePath -- , soundBankFile
         fsMIDIPlayerPlay
         -- playPositionCheck
      end try
      --  Throw "Fluid Synth API Not Loaded"
   end if
end playPMD_FluidSynth

on setPlayBtnFS toPlay
   try
set the enabled of btn "Play" to ( not toPlay )
   end try
   try
set the enabled of btn "Stop" to ( toPlay )
   end try
end setPlayBtnFS

------------------------ No-playback PMD to Standard MIDI Data (crossplatform) ----------------------------------------
/**
Name: playSentenceToMIDIData

Type: function

Syntax:
playSentenceToMIDIData <playSentence>,[<playTempo>],[<soundPatchNum>]

Summary: playSentenceToMIDIData retruns Standard MIDI File Binary Data,
converted from the given PlaySentenceMusicData,
starting at the specified beats per minute, with the given patch number,

Parameters:
playSentence: string containing extended-HyperTalk / xTalk 'ABC' textual music notation.
playTempo; Intitial playback tenmpo in Beats Per Minute, this may be overridden
by tempo messages within the playSentence string.
soundPatchNum: a number in range 0-127 is the sound patch to use as the initial
or default instrument sound. This nay be overridden by patchchange messages within
the playSentence string.

Example:
put playSentenceToMIDIData("C4q Ee. Gs..",120,0) -- get MIDI data at 120BPM plays on "Piano 1"

Returns:
MIDI formated binary data suitable for playback or writing to a standard midi file.

Description:
Converts PlaySentence Musical Data (PMD) starting at the specified tempo,
with the given sound patch number. The binary data returned may be written directly to a standard MIDI file or
passed along to some MIDI playback handler.
**/
function playSentenceToMIDIData tNotes, playTempo, defInst
   set the cursor to watch
   --
   if line 1 of tNotes contains "//pmd" then
-- exist header
put line 1 of tNotes into pmdHeader
if item 3 of pmdHeader > 0 then
   put item 3 of pmdHeader into playTempo
end if
if item 4 of pmdHeader > 0 then
   put item 4 of pmdHeader into defInst
end if
   end if
   if playTempo is "" then put 100 into playTempo
   if defInst is "" then put 1 into defInst
   --
   put getCopyrightBin( tNotes ) into midiEvents
   put getInfoBin( tNotes ) after midiEvents
   put getTimeSignBin( tNotes ) after midiEvents
   --
   put binaryEncode( "H*", "00FF54054000000000" ) after midiEvents -- SMTPE offset
   put binaryEncode( "H*", "00FF5103" ) & num2Bin( 590000 *100 div playTempo, 3) after midiEvents
   put binaryEncode( "H*", "00B07900" ) after midiEvents -- reset all controler( CC#121 = 0 )
   --
   put notes2EvList( tNotes, defInst, playTempo ) into evList
   set the cursor to watch
   sort lines of evList
   put evList2Midi( evList ) after midiEvents
   --
   put getMidiHeader( length( midiEvents ) ) before midiEvents
   --
   return midiEvents
end playSentenceToMIDIData

------------------------------------------------ MakeSMF ---------------------------------------------
----------------makeSMF script by UDI 2002.12.06-------------
-- makeSMF  tNotes , [ playTempo ], [ defInst ], savePath
-- param Notes = Score string to play or make SMF.
-- param 2 optional playTempo = Default play tempo.
---- This parameter is adopted if there is not a header ( '//pmd' ) in 'notes'.
-- param 3 optional defInst = Default pay instrument number.
---- This parameter is adopted if there is not a header ( '//pmd' ) in 'notes'.
-- param 4 savePath = Full path or the file name of a MIDI file to make.
-----------------------------------------------------
-- 2002.07.14 first release
-- 2002.07.15 pedal problem fixed
-- 2002.10.03 global var -> local var
-- 2002.12.06 modifyed evList2Midi
-----------------------------------------------------
local makeSmfNotes, makeSmfEvList, makeSmfWord
local makeSmfAbsT, makeSmfChannel, makeSmfAbsPart
local makeSmfOctave, makeSmfDur, makeSmfVelocity, makeSmfGRate
local makeSmfModuration, makeSmfExp, makeSmfHoldd, makeSmfAltArry, makeSmfKeyShift

/**
Name: makeSMF
Summary: creates a Standard MIDI File from the given PlaySentenceMusicData,
starting at the specified beats per minute, with the given patch number,
writing it to the provided file path.

Example:
makeSMF ("C4q Ee. Gs..",120,1,"~/testSMF.mid")

Parameters:

notes: A string of xTalk playSentence data

playTempo: The intial tempo to set in the output MIDI

defInst: The intial sound patch to set in the output MIDI

savePath: a file path to save the MIDI file to

Description:
makeSMF creates a Standard MIDI Fike (SMF) from the given PlaySentenceMusicData (PMD)
starting at the specified beats per minute, with the given patch number, to the provided file path.
**/
on makeSMF notes, playTempo, defInst, savePath
   put playSentenceToMIDIData( notes, playTempo, defInst ) into midiEvents
   set the cursor to watch
   --set the fileType to "MGRpMidi" -- MIDIGraphy (C)TONTATA
   set the fileType to "TVODMidi" -- QuickTime Player
   --
   set the itemDel to "."
   if last item of savePath is not "mid" then
put ".mid" after savePath
   end if
   --
   open file savePath for binary write
   write midiEvents to file savePath
   close file savePath
end makeSMF

function notes2EvList tNotes, defInst, playTempo
   put tNotes into makeSmfNotes
   put "" into makeSmfEvList
   --
   put 0 into aPart
   put 0 into makeSmfChannel
   initPart
   put false into existPart1Init
   --
   put 0 into cursorCount
   repeat
if cursorCount = 40 then --2002.12.06
   set the cursor to busy
   put 0 into cursorCount
else
   add 1 to cursorCount
end if
put word 1 of makeSmfNotes into makeSmfWord
--
if makeSmfWord is "" then exit repeat
--
put first char of makeSmfWord into aChar
-- Note -----------------
if "CDEFGAB123456789" contains aChar then -- pitch name
   if aPart = 0 then
if existPart1Init is false then -- first part with no $
   put true into existPart1Init
   if defInst >= 16384 then put 9 into makeSmfChannel
   put getInitHex( makeSmfChannel, defInst ) after makeSmfEvList
end if
   end if
   -- pitch
   put getPitch() into aPitch
   -- Duration
   put getDur( false ) into aDur
   if aDur > 0 then put aDur into makeSmfDur
   -- gate time
   put getGRate() into aGRate
   if aGRate > 0 then put aGRate into makeSmfGRate
   -- velocity
   put getVelocity() into aVelocity
   if aVelocity > -1 then put aVelocity into makeSmfVelocity
   -- set note
   put abstT2Str( makeSmfAbsT ) & "," & note2Hex( makeSmfChannel, aPitch, makeSmfVelocity ) & return after makeSmfEvList
   put abstT2Str( makeSmfAbsT + ( makeSmfDur * makeSmfGRate div 10 )*100 ) & "," & note2Hex( makeSmfChannel, aPitch, 0 ) & return after makeSmfEvList
   add makeSmfDur *100 to makeSmfAbsT
   delete first word of makeSmfNotes
   next repeat
end if
-- Chord -----------------
if aChar is "(" then
   if aPart = 0 then
if existPart1Init is false then -- first part with no $
   put true into existPart1Init
   if defInst >= 16384 then put 9 into makeSmfChannel
   put getInitHex( makeSmfChannel, defInst ) after makeSmfEvList
end if
   end if
   -- delete word at first
   put char 1 to ( offset( ")", makeSmfNotes ) ) -1 of makeSmfNotes into chordWord
   delete char 1 to ( offset( "(", chordWord ) ) of chordWord
   delete char 1 to ( offset( ")", makeSmfNotes ) ) of makeSmfNotes
   put first char of makeSmfNotes into aChar
   put "" into chordProp
   if ( aChar <> " " ) and ( aChar <> return ) and ( aChar <> lineFeed ) then
put first word of makeSmfNotes after chordProp
delete first word of makeSmfNotes
   end if
   -- chord init
   get "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"
   put it into wP
   put it into wS
   put it into wG
   get "-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1"
   put it into wV
   -- read each note
   repeat with N = 1 to 32
put word 1 of chordWord into makeSmfWord
if makeSmfWord is "" then exit repeat
-- each pitch
put getPitch() into item N of wP
-- each Duration
put getDur( false ) into aDur
if aDur > 0 then put aDur into item N of wS
-- each gate time
put getGRate() into aGRate
if aGRate > 0 then put aGRate into item N of wG
-- each velocity
put getVelocity() into aVelocity
if aVelocity > -1 then put aVelocity into item N of wV
--
delete first word of chordWord
   end repeat
   put chordProp into makeSmfWord
   -- chord Duration
   put getDur( false ) into aDur
   if aDur > 0 then put aDur into makeSmfDur
   -- chord gate time
   put getGRate() into aGRate
   if aGRate > 0 then put aGRate into makeSmfGRate
   -- chord velocity
   put getVelocity() into aVelocity
   if aVelocity > -1 then put aVelocity into makeSmfVelocity
   -- set
   repeat with N =1 to 32
put item N of wP into aPitch
if aPitch = 0 then next repeat
put item N of wS into aStep
if aStep = 0 then put makeSmfDur into aStep
put item N of wG into aGRate
if aGRate = 0 then put makeSmfGRate into aGRate
put item N of wV into aVelocity
if aVelocity = -1 then put makeSmfVelocity into aVelocity
-- set note
put abstT2Str( makeSmfAbsT ) & "," & note2Hex( makeSmfChannel, aPitch, aVelocity ) & return after makeSmfEvList
put abstT2Str( makeSmfAbsT + ( aStep * aGRate div 10 )*100 ) & "," & note2Hex( makeSmfChannel, aPitch, 0 ) & return after makeSmfEvList
   end repeat
   add makeSmfDur *100 to makeSmfAbsT
   next repeat
end if
-- Rest -----------------
if ( aChar is "R" ) or ( aChar is "0" ) then
   delete first char of makeSmfWord
   put getDur( false ) into aDur
   if aDur > 0 then put aDur into makeSmfDur
   add makeSmfDur *100 to makeSmfAbsT
   delete first word of makeSmfNotes
   next repeat
end if
-- Set note prop command------------------
-- Octave
if aChar is "O" then
   delete first char of makeSmfWord
   put getNum( 4 ) into makeSmfOctave
   delete first word of makeSmfNotes
   next repeat
end if
-- Duration
if aChar is "L" then
   delete first char of makeSmfWord
   put getDur( false ) into aDur
   if aDur > 0 then put aDur into makeSmfDur
   else put name2Dur( "q" ) into makeSmfDur
end if
-- GateTime
if aChar is "@" then
   delete first char of makeSmfWord
   put getNum(10) into aGRate
end if
-- Velocity
if aChar is "V" then
   delete first char of makeSmfWord
   put getVelocity() into aVelocity
   if aVelocity > -1 then put aVelocity into makeSmfVelocity
   else put 127 into makeSmfVelocity
end if
-- Controls -----------------
if aChar is "P" then -- Panpot
   setPanEvent
   delete first word of makeSmfNotes
   next repeat
end if
if aChar is "M" then -- Moduration
   setModurationEvent
   delete first word of makeSmfNotes
   next repeat
end if
if aChar is "Z" then -- Z Reverb
   setRevervEvent
   delete first word of makeSmfNotes
   next repeat
end if
if aChar is "H" then -- H Pedal Hold
   setPedalEvent
   delete first word of makeSmfNotes
   next repeat
end if
if aChar is "Y" then -- Y Expression
   setExpressionEvent
   delete first word of makeSmfNotes
   next repeat
end if
-- Tempo -----------------
if aPart = 0 then
   if aChar is "T" then -- T Tempo
delete first char of makeSmfWord
put getNum( 100 ) into aTempo
put 590000 *100 div playTempo * 100 div aTempo into aNum
put abstT2Str( makeSmfAbsT ) & "," & "FF5103" & num2Hex( aNum, 6 ) & return after makeSmfEvList
delete first word of makeSmfNotes
next repeat
   end if
end if
-- / comments ------------------
if ( aChar is "/" ) or ( aChar is "|" ) then
   put char 2 of makeSmfWord into aChar
   if ( aChar is "/" ) or ( aChar is "|" ) then -- // line comment
delete first line of makeSmfNotes
next repeat
   end if
   if aChar is "*" then -- /* block comment */
put offset( "*/", makeSmfNotes ) into aOfs
if aOfs = 0 then
   put offset( "*|", makeSmfNotes ) into aOfs
end if
delete char 1 to aOfs +1 of makeSmfNotes
next repeat
   end if
   delete first word of makeSmfNotes
   next repeat
end if
-- Alternate & shift ------------------
if aChar is "#" then -- sharp alternate
   delete first char of makeSmfWord
   put 1 into altShift
   if first char of makeSmfWord is "#" then -- double sharp
delete first char of makeSmfWord
put 2 into altShift
   end if
   setAltShift makeSmfWord, altShift
   delete first word of makeSmfNotes
   next repeat
end if
if aChar is "_" then -- flat alternate
   delete first char of makeSmfWord
   put -1 into altShift
   if first char of makeSmfWord is "_" then -- double flat
delete first char of makeSmfWord
put -2 into altShift
   end if
   setAltShift makeSmfWord, altShift
   delete first word of makeSmfNotes
   next repeat
end if
if aChar is "^" then -- natural alternate
   delete first char of makeSmfWord
   setAltShift makeSmfWord, altShift
   delete first word of makeSmfNotes
   next repeat
end if
if aChar is "~" then -- key shift
   delete first char of makeSmfWord
   put getNN( 0 ) into makeSmfKeyShift
   delete first word of makeSmfNotes
   next repeat
end if
-- $ part ------------------
if aChar is "$" then
   -- init part
   initPart
   --
   delete first char of makeSmfWord
   put getNum( defInst ) into instNum
   --
   if ( aPart = 0 ) and ( makeSmfEvList = "" ) then
put true into existPart1Init
   else
if makeSmfChannel <> 9 then
   add 1 to aPart
end if
   end if
   -- init channel
   if instNum >= 16384 then
put 9 into makeSmfChannel
put max( 0, ( aPart -1 ) ) into aPart
   else
if aPart = 9 then put 10 into aPart
put aPart into makeSmfChannel
   end if
   put getInitHex( makeSmfChannel, instNum ) after makeSmfEvList
   -- part volume
   if first char of makeSmfWord is "V" then
delete first char of makeSmfWord
put trunc( getNum( -1 ) *12.7 ) into aVol
if ( aVol < 0 ) or ( aVol > 127 )  then put 127 into aVol
put abstT2Str( makeSmfAbsT ) & "," & ctrl2Hex( aPart, 7, aVol ) & return after makeSmfEvList
   end if
   delete first word of makeSmfNotes
   next repeat
end if
-- other ------------------
delete first word of makeSmfNotes
   end repeat
   --
   put makeSmfEvList into evList
   put "" into makeSmfEvList
   return evList
end notes2EvList

on initPart
   put 4 into makeSmfOctave
   put name2Dur( "q" ) into makeSmfDur
   put 127 into makeSmfVelocity
   put 10 into makeSmfGRate
   put 0 into makeSmfModuration
   put 127 into makeSmfExp
   put 0 into makeSmfHold
   put "0,0,0,0,0,0,0" into makeSmfAltArry
   put 0 into makeSmfKeyShift
   put 10 into makeSmfAbsT
end initPart

function getDur noDivFlag
   put 0 into aDur
   repeat
put first char of makeSmfWord into aChar
if not ( "whqestx" contains aChar ) then exit repeat
put name2Dur( aChar ) into oneDur
delete first char of makeSmfWord
-- dotted
put oneDur div 2 into harfDur
repeat 8
   if first char of makeSmfWord is "." then
delete first char of makeSmfWord
add harfDur to oneDur
put harfDur div 2 into harfDur
   else
exit repeat
   end if
end repeat
if noDivFlag is not true then
   -- divided beat
   put first char of makeSmfWord into aChar
   if aChar is "/" then
delete first char of makeSmfWord
put (oneDur div ( first char of makeSmfWord )) into oneDur
delete first char of makeSmfWord
   else
if "23456789" contains aChar then
   put aChar into ren
   delete first char of makeSmfWord
   if first char of makeSmfWord <> "." then
put (oneDur*(2^trunc(log2(ren))) div ren) into oneDur
   else
delete first char of makeSmfWord
put trunc(oneDur*(2^trunc(log2(ren*(2/3))))/ren*3/2) into oneDur
   end if
end if
   end if
end if
add oneDur to aDur
   end repeat
   return aDur
end getDur

function getGRate
   if first char of makeSmfWord is "@" then
delete first char of makeSmfWord
return getNum(10)
   else
return 0
   end if
end getGRate

function getVelocity
   if first char of makeSmfWord is "v" then
delete first char of makeSmfWord
put trunc( getNum( 10 ) * 12.7 ) into aVelocity
if aVelocity > 127 then put 127 into aVelocity
return aVelocity
   else
return -1
   end if
end getVelocity

function getNN dflt -- signed number
   if first char of makeSmfWord is "-" then
put true into nFlag
delete first char of makeSmfWord
   else
put false into nFlag
   end if
   put getNum( dflt ) into aNum
   if nFlag then
return - aNum
   else
return aNum
   end if
end getNN

function getNum dflt
   put "" into aResult
   get offset( first char of makeSmfWord, "0123456789" ) -1
   if it = -1 then return dflt
   delete first char of makeSmfWord
   put it into aResult
   repeat
get offset( first char of makeSmfWord, "0123456789" ) -1
if it = -1 then exit repeat
delete first char of makeSmfWord
put it after aResult
   end repeat
   return aResult
end getNum

on setAltShift aWord, altShift --2002.12.06
   repeat for each char aChar in aWord
get offset( aChar, "CDEFGAB" )
if it > 0 then
   put altShift into item it of makeSmfAltArry
end if
   end repeat
end setAltShift

on setPanEvent
   put makeSmfAbsT into absT
   delete first char of makeSmfWord
   put trunc( getNum( 5 ) *12.7 ) into aNum
   put abstT2Str( absT ) & "," & ctrl2Hex( makeSmfChannel, 10, aNum ) & return after makeSmfEvList
   add 1 to makeSmfAbsT
   repeat
put getDur( true ) into aDur
if aDur = 0 then exit repeat
add aDur *100 to absT
put trunc( getNum( 5 ) *12.7 ) into aNum
put abstT2Str( absT ) & "," & ctrl2Hex( makeSmfChannel, 10, aNum ) & return after makeSmfEvList
   end repeat
end setPanEvent

on setModurationEvent
   put makeSmfAbsT into absT
   delete first char of makeSmfWord
   if not ( "whqest1234567890" contains ( first char of makeSmfWord ) ) then
put abstT2Str( absT ) & "," & ctrl2Hex( makeSmfChannel, 1, 0 ) & return after makeSmfEvList
put 0 into makeSmfChannel
   end if
   repeat
put makeSmfWord into thisWord
put getDur( true ) into eDur
put getNum( 0 ) into tgV
if makeSmfWord is thisWord then
   put  tgV into makeSmfModuration
   exit repeat
end if
doSetCtrl absT, eDur, trunc(makeSmfModuration*12.7), trunc(tgV*12.7), 8, 1
put tgV into makeSmfModuration
add eDur *100 to absT
   end repeat
end setModurationEvent

on setRevervEvent
   delete first char of makeSmfWord
   if getNum( 0 ) = 1 then put 96 into aNum
   else put 0 into aNum
   put abstT2Str( makeSmfAbsT ) & "," & ctrl2Hex( makeSmfChannel, 91, aNum ) & return after makeSmfEvList
   add 1 to makeSmfAbsT
end setRevervEvent

on setPedalEvent
   delete first char of makeSmfWord
   put getNum(0) into aNum
   if aNum > 0 then
if makeSmfHold > 0 then
   put abstT2Str( makeSmfAbsT ) & "," & ctrl2Hex( makeSmfChannel, 64, 0 ) & return after makeSmfEvList
   add 1 to makeSmfAbsT
   --2002.07.15 delete first char of makeSmfWord
end if
put 96 into aNum
   end if
   put aNum into makeSmfHold
   put abstT2Str( makeSmfAbsT ) & "," & ctrl2Hex( makeSmfChannel, 64, aNum ) & return after makeSmfEvList
   add 1 to makeSmfAbsT
   --
   put getDur( true ) into aDur
   if aDur > 0 then
put abstT2Str( makeSmfAbsT + aDur *100 ) & "," & ctrl2Hex( makeSmfChannel, 64, 0 ) & return after makeSmfEvList
   end if
end setPedalEvent

on setExpressionEvent
   put makeSmfAbsT into absT
   delete first char of makeSmfWord
   if first char of makeSmfWord is " " then
put trunc( getNum( 10 ) *12.7 ) into makeSmfExp
put abstT2Str( absT ) & "," & ctrl2Hex( makeSmfChannel, 11, makeSmfExp ) & return after makeSmfEvList
   else
put getNum(-1) into aExp
if aExp > -1 then put trunc( aExp * 12.7 ) into makeSmfExp
put abstT2Str( makeSmfAbsT ) & "," & ctrl2Hex( makeSmfChannel, 11, makeSmfExp ) & return after makeSmfEvList
put makeSmfAbsT into absT
repeat
   put getDur( true ) into eDur
   put min( 127, trunc( getNum( 10 ) *12.7 ) ) into tgV
   if eDur = 0 then exit repeat
   doSetCtrl absT, eDur, makeSmfExp, tgV, 4, 11
   put tgV into makeSmfExp
   add eDur *100 to absT
end repeat
   end if
end setExpressionEvent

on doSetCtrl topT, eDur, curV, tgV, minGap, ctrlN -- env
   put topT into absT
   put tgV into tgVal
   put max( 1, eDur div 10 ) into stepN
   put tgV * 100 into tgV -- bias 10
   put curV *100 into curV -- bias 10
   put ( ( tgV - curV ) div stepN ) into stepV
   repeat with n =1 to stepN-1
add 10 *100 to absT
put curV div ( minGap *100 ) into oldV
add stepV to curV
if ( stepV >0 and curV >tgV ) or ( stepV <0 and curV <tgV ) then
   exit repeat
end if
if curV div ( minGap *100 ) <> oldV then
   put abstT2Str( absT ) & "," & ctrl2Hex( makeSmfChannel, ctrlN, curV div 100 ) & return after makeSmfEvList
end if
   end repeat
   put abstT2Str( topT + eDur *100 -1 ) & "," & ctrl2Hex( makeSmfChannel, ctrlN, tgVal ) & return after makeSmfEvList
end doSetCtrl

function note2Hex pPart, aPitch, aVelocity -- note on/off  $90+pPart
   return bin2Hex( numToByte( 144 + pPart ) & numToByte( aPitch ) & numToByte( aVelocity ) )
end note2Hex

function ctrl2Hex pPart, ctrlN, tmakeSmfDur -- control change $B0+pPart
   return bin2Hex( numToByte( 176 + pPart ) & numToByte( ctrlN ) & numToByte( tmakeSmfDur ) )
end ctrl2Hex

function pc2Hex pPart, instNum -- program change  $C0+pPart
   return bin2Hex( numToByte( 192 + pPart ) & numToByte( instNum ) )
end pc2Hex

function name2Dur aChar
   return 960 div 2^( offset( aChar, "whqestx" ) -1 )
end name2Dur

function getPitch
   put first char of makeSmfWord into aChar
   if "CDEFGAB" contains aChar then -- pitch name
put offset( aChar, "C D EF G A B" ) -1 into aPitch
put item ( offset( aChar, "CDEFGAB" ) ) of makeSmfAltArry into altShift
delete first char of makeSmfWord
-- accidental
put false into existAccidental
if first char of makeSmfWord is "#" then
   put true into existAccidental
   delete first char of makeSmfWord
   add 1 to aPitch
   if first char of makeSmfWord is "#" then
delete first char of makeSmfWord
add 1 to aPitch
   end if
end if
if ( first char of makeSmfWord is "b" ) or ( first char of makeSmfWord is "_" ) then
   put true into existAccidental
   delete first char of makeSmfWord
   subtract 1 from aPitch
   if ( first char of makeSmfWord is "b" ) or ( first char of makeSmfWord is "_" ) then
delete first char of makeSmfWord
subtract 1 from aPitch
   end if
end if
if first char of makeSmfWord is "^" then
   put true into existAccidental
   delete first char of makeSmfWord
end if
if existAccidental is false then
   add altShift to aPitch
end if
add makeSmfKeyShift to aPitch
-- octave
put getNum( -1 ) into aNum
if aNum > -1 then put aNum into makeSmfOctave
add ( makeSmfOctave +1 ) *12 to aPitch
return aPitch
   else -- pitch number
return getNum( 0 )
   end if
end getPitch

function bin2Hex evStr
   put "" into theHex
   get binaryDecode( "H*", evStr, theHex )
   return theHex
end bin2Hex

function abstT2Str absT
   return char 1 to ( 10- length( absT ) ) of "0000000000" & absT
end abstT2Str

function evList2Midi evList -- 2002.12.06
   put "" into midiEvents
   put 0 into oldT
   repeat for each line theLine in evList
-- delta time
put ( item 1 of theLine ) div 100 into absT
put absT - oldT into deltaT
put absT into oldT
if deltaT > 127 then
   put numToByte( 128 + deltaT div 128 ) after midiEvents
   put numToByte( deltaT mod 128 ) after midiEvents
else
   put numToByte( deltaT ) after midiEvents
end if
-- event
put binaryEncode( "H*", item 2 of theLine ) after midiEvents
   end repeat
   -- end marker
   put binaryEncode( "H*", "00FF2F00" ) after midiEvents
   return midiEvents
end evList2Midi

function getInitHex aPart, instNum
   put "" into resultHex
   --
   put num2Hex( aPart, 1 ) into partHex
   if instNum < 16384 then
put instNum div 128 into aNum
put abstT2Str( 0 ) & "," & "B" & partHex & "00"  & num2Hex( aNum, 2 ) & return after resultHex -- bank select MSB( CC#0 = 0 )
put abstT2Str( 1 ) & "," & "B" & partHex & "2000" & return after resultHex -- bank select LSB( CC#32 = 0 )
put instNum mod 128 into aNum
put abstT2Str( 2 ) & "," & "C" & partHex & num2Hex( aNum -1, 2 ) & return after resultHex -- program change( CN#12 )
   else -- drum part
put abstT2Str( 0 ) & "," & "B" & partHex & "0000" & return after resultHex -- bank select MSB( CC#0 = 0 )
put abstT2Str( 1 ) & "," & "B" & partHex & "2000" & return after resultHex -- bank select LSB( CC#32 = 0 )
put instNum - 16384 into aNum
put abstT2Str( 2 ) & "," & "C" & partHex & num2Hex( aNum -1, 2 ) & return after resultHex -- program change( CN#12 )
   end if
   put abstT2Str( 3 ) & "," & "B" & partHex & "5B00" & return after resultHex -- Reverb( CC#91 = 0 )
   put abstT2Str( 3 ) & "," & "B" & partHex & "0B7F" & return after resultHex -- Expression( CC#11 = 0x7F )
   put abstT2Str( 3 ) & "," & "B" & partHex & "0A40" & return after resultHex -- Panpot( CC#10 = 0x40 )
   --
   return resultHex
end getInitHex

-- function getInitHex aPart, instNum
--put "" into resultHex
--
-- put num2Hex( aPart, 1 ) into partHex
--  put abstT2Str( 0 ) & "," & "B" & partHex & "0000"  & return after resultHex -- bank select MSB( CC#0 = 0 )
-- put abstT2Str( 1 ) & "," & "B" & partHex & "2000" & return after resultHex -- bank select LSB( CC#32 = 0 )
-- put abstT2Str( 2 ) & "," & "C" & partHex & num2Hex( instNum -1, 2 ) & return after resultHex -- program change( CN#12 )
-- --
--  put abstT2Str( 3 ) & "," & "B" & partHex & "5B00" & return after resultHex -- Reverb( CC#91 = 0 )
--  put abstT2Str( 3 ) & "," & "B" & partHex & "0B7F" & return after resultHex -- Expression( CC#11 = 0x7F )
-- put abstT2Str( 3 ) & "," & "B" & partHex & "0A40" & return after resultHex -- Panpot( CC#10 = 0x40 )
--
-- return resultHex
-- end getInitHex

function getMidiHeader trackSize
   put "" into aResult
   put "MThd" after aResult -- SMF marker
   put binaryEncode( "H*", "000000060000000100F0" ) after aResult -- SMF header
   put "MTrk" after aResult -- track marker
   put num2Bin( trackSize, 4 ) after aResult
   return aResult
end getMidiHeader

function num2DeltaTimeBin aNum
   put "" into aResult
   put numToByte( aNum mod 128 ) into aResult
   repeat 4
put aNum div 128 into aNum
put numToByte( 128 + ( aNum mod 128 ) ) before aResult
   end repeat
   return aResult
end num2DeltaTimeBin

function num2Bin aNum, nDigit
   put "" into aResult
   repeat nDigit
put numToByte( aNum mod 256 ) before aResult
put aNum div 256 into aNum
   end repeat
   return aResult
end num2Bin

function num2Hex aNum, nDigit
   put "" into theHex
   repeat nDigit
get aNum mod 16
put char it+1 of "0123456789ABCDEF" before theHex
put aNum div 16 into aNum
   end repeat
   return theHex
end num2Hex

--
function getCopyrightBin notes
   put offset( "//c ", tNotes) into aOfs
   if aOfs = 0 then return ""
   put line 1 of ( char aOfs+4 to aOfs+127+4 of tNotes) into copyStr
   return binaryEncode( "H*", "00FF02" ) & numToByte( length( copyStr ) ) & copyStr
end getCopyrightBin

function getInfoBin notes
   put "" into infoBin
   repeat
put offset( "//i ", tNotes) into aOfs
if aOfs = 0 then exit repeat
put line 1 of ( char aOfs+4 to aOfs+127+4 of tNotes) into aInfoStr
put binaryEncode( "H*", "00FF01" ) & numToByte( length( aInfoStr ) ) & aInfoStr after infoBin
delete char 1 to aOfs of notes
delete first line of notes
   end repeat
   return infoBin
end getInfoBin

function getTimeSignBin notes
   put offset( "//s ", tNotes) into aOfs
   if aOfs = 0 then return ""
   --
   put word 1 of line 1 of ( char aOfs+4 to aOfs+127+4 of tNotes) into makeSmfWord
   --
   put getNum(4) into elem
   delete first char of makeSmfWord
   put getNum(4) into denom
   --
   put numToByte( elem ) into elimBin
   put 2 into denomiValue
   repeat with n = 1 to 32
if ( denom +0 ) = 2 ^ n then
   put n into denomiValue
   exit repeat
end if
add 1 to n
   end repeat
   put numToByte( denomiValue ) into denomiBin
   --
   return binaryEncode( "H*", "00FF5804" ) & elimBin & denomiBin & binaryEncode( "H*", "1808" )
end getTimeSignBin
--------------------------------------------------------------  end of makeSMF  -------------------------------------------------------------------

--------------------------------------------------------------  begin Paul's MIDI tools -----------------------------------------------------------
function evaluateStatusByte theHex
   switch theHex
case "ff"
   return "Meta Event" --- Meta Event Message in MIDI files
   exit evaluateStatusByte --  OR System Reset Request for System Real-Time messages (which should not be in a MIDI File)
   break
case "f0"
   return "SysEx"    -- f0 System Exclusive Message (VLQ any # of data bytes)
   exit evaluateStatusByte
   break
case "f7"
   return "end_SysEx" --- 247 f7 1111,0111 EOX (End of System Exclusive marker)
   exit evaluateStatusByte
   break
case "f8"
   return "Timing Clock" --- Timing Clock <- System Real-Time messages should not really be in a MIDI File!
   exit evaluateStatusByte
   break
case "fa"
   return "Timing Clock Start" --- Timing Clock Start <- System Real-Time messages should not really be in a MIDI File!
   exit evaluateStatusByte
   break
case "fb"
   return "Timing Clock Continue" --- Timing Clock Continue <- System Real-Time messages should not really be in a MIDI File!
   exit evaluateStatusByte
   break
case "fc"
   return "Timing Clock Stop" --- Timing Clock Stop <- System Real-Time messages should not really be in a MIDI File!
   exit evaluateStatusByte
   break
case "fe"
   return "Active Sensing" --- A "keep alive" message <- System Real-Time messages should not really be in a MIDI File!
   exit evaluateStatusByte
   break
case "f1"   ---f1 MIDI Time Code Quarter Frame
   return "MTC Quarter Frame"
   exit evaluateStatusByte
   break
case "f2"   ---f2 Song Position Pointer
   return "Song Position Pointer"
   exit evaluateStatusByte
   break
case "f3"   --- f3 Song Select
   return "Song Select"
   exit evaluateStatusByte
   break
case "f6"   --- f6 Tune Request
   return "Tune Request"
   exit evaluateStatusByte
   break
default
   --244 f4 1111,0100 Undefined
   --245 f5 1111,0101 Undefined
   --249 f9 1111,1001 Undefined
   --253 fd 1111,1101 Undefined
   -- channel messages---
   get itemOffset ( theHex,"90,91,92,93,94,95,96,97,98,99,9a,9b,9c,9d,9e,9f")
   if it <> 0 then
return "noteon ch"& it
exit evaluateStatusByte
break
   end if
   get itemOffset (theHex,"e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,ea,eb,ec,ed,ee,ef")
   if it <> 0 then
return "pitchbend ch"& it
exit evaluateStatusByte
break
   end if
   get itemOffset (theHex,"80,81,82,83,84,85,86,87,88,89,8a,8b,8c,8d,8e,8f")
   if it <> 0 then
return "noteoff ch"& it
exit evaluateStatusByte
break
   end if
   get itemOffset (theHex,"c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,ca,cb,cc,cd,ce,cf")
   if it <> 0 then
return "programchange ch"& it
exit evaluateStatusByte
break
   end if
   get itemOffset (theHex,"b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,ba,bb,bc,bd,be,bf")
   if it <> 0 then
return "controller ch"& it
exit evaluateStatusByte
break
   end if
   get itemOffset (theHex,"d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,da,db,dc,dd,de,df")
   if it <> 0 then
return "pressure ch"& it
exit evaluateStatusByte
break
   end if
   get itemOffset (theHex,"a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,aa,ab,ac,ad,ae,af")
   if it <> 0 then
return "aftertouch ch"& it
exit evaluateStatusByte
break
   end if
   break
   end switch
   return empty
end evaluateStatusByte

function evaluateMetaEventTypeByte theHex
   switch theHex
case "51"
   return "set tempo"
   exit evaluateMetaEventTypeByte
   break
case "58"
   return "time signature"
   exit evaluateMetaEventTypeByte
   break
case "59"
   return "key signature"
   exit evaluateMetaEventTypeByte
   break
case "54"
   return "SMPTE offset"
   exit evaluateMetaEventTypeByte
   break
case "2f"
   return "end MTrk"
   exit evaluateMetaEventTypeByte
   break
case "20"-- Also Known as MIDI Channel Prefix
   return "system channel"
   exit evaluateMetaEventTypeByte
   break
case "21"
   return "MIDI port" -- Considered obsolete but still found in some old MIDI Files on the net
   exit evaluateMetaEventTypeByte
   break
case "01"
   return "ascii text"
   exit evaluateMetaEventTypeByte
   break
case "02"
   return "copyright text"
   exit evaluateMetaEventTypeByte
   break
case "03"
   return "track_name text"
   exit evaluateMetaEventTypeByte
   break
case "04"
   return "instrument_name text"
   exit evaluateMetaEventTypeByte
   break
case "05"
   return "lyric text"
   exit evaluateMetaEventTypeByte
   break
case "06"
   return "marker text"
   exit evaluateMetaEventTypeByte
   break
case "07"
   return "cue text"
   exit evaluateMetaEventTypeByte
   break
case "08"
   return "prorgam_name text"
   exit evaluateMetaEventTypeByte
   break
case "09"
   return "device_name text"
   exit evaluateMetaEventTypeByte
   break
case "7f"
   return "proprietary data"
   exit evaluateMetaEventTypeByte
   break
default
   return empty
   exit evaluateMetaEventTypeByte
   break
   end switch
end evaluateMetaEventTypeByte


/**
Name: controllerNumToName

Type: function

Syntax: controllerNumToName(pMIDICCNumber)

Summary: Retrieve the path to the HyperSounds font included with General Music Library resources.

Introduced: 1.0

OS: mac,win,linux,ios,android

Platforms: desktop,mobile

Example:
put controllerNumToName(7) into tContinuousControllerName -- string:"Volume (coarse)""

Parameters:
pMIDICCNumber: The MIDI Continuous Controller number, 0-127, to get the huamn readable name of.

Returns: Returns the human readale name of a MIDI Continuous Controller (CC) corrisponding to a number parameter

Description:
Returns the human readale name of a MIDI Continuous Controller (CC) corrisponding
to a number parameter.

Tags: Music, MIDI
*/
function controllerNumToName ccNum
   return item ccNum+1 of ("Bank Select (coarse),Modulation Wheel (coarse),Breath controller (coarse),Foot Pedal (coarse),Undefined,"&\
   "Portamento Time (coarse),Data Entry (coarse),Volume (coarse),Balance (coarse),Undefined,Pan position (coarse),Expression (coarse),"&\
   "Effect Control 1 (coarse),Effect Control 2 (coarse),Undefined,Undefined,General Purpose Slider 1,General Purpose Slider 2,"&\
   "General Purpose Slider 3,General Purpose Slider 4,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,"&\
   "Undefined,Undefined,Undefined,Undefined,Bank Select (fine),Modulation Wheel (fine),Breath controller (fine),Undefined,Foot Pedal (fine),"&\
   "Portamento Time (fine),Data Entry (fine),Volume (fine),Balance (fine),Undefined,Pan position (fine),Expression (fine),Effect Control 1 (fine),"&\
   "Effect Control 2 (fine),Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,"&\
   "Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Hold Pedal (on/off),Portamento (on/off),Sustenuto Pedal (on/off),"&\
   "Soft Pedal (on/off),Legato Pedal (on/off),Hold 2 Pedal (on/off),Sound Variation,Sound Timbre,Sound Release Time,Sound Attack Time,"&\
   "Sound Brightness,Sound Control 6,Sound Control 7,Sound Control 8,Sound Control 9,Sound Control 10,General Purpose Button 1 (on/off),"&\
   "General Purpose Button 2 (on/off),General Purpose Button 3 (on/off),General Purpose Button 4 (on/off),Undefined,Undefined,Undefined,Undefined,"&\
   "Undefined,Undefined,Undefined,Effects Level,Tremulo Level,Chorus Level,Celeste Level,Phaser Level,Data Button increment,Data Button decrement,"&\
   "Non-registered Parameter (fine),Non-registered Parameter (coarse),Registered Parameter (fine),Registered Parameter (coarse),Undefined,Undefined,"&\
   "Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,"&\
   "Undefined,Undefined,Undefined,All Sound Off,All Controllers Off,Local Keyboard (on/off),All Notes Off,Omni Mode Off,Omni Mode On,"&\
   "Mono Operation,Poly Operation")
end controllerNumToName

/**
Name: midiControllerNames

Type: function

Syntax: midiControllerNames()

Summary: Get a line-delimited list of the human readable names for the
GeneralMIDI standard Continuous Controller (CC) names.

Introduced: 1.0

OS: mac,win,linux,ios,android

Platforms: desktop,mobile

Example:
put midiControllerNames()

Parameters:

Returns: a line delimited list of GeneralMIDI standard controller names

Description:
Returns 127 line-delimited list of the human readable names for the GeneralMIDI
standard MIDI Continuous Controller (CC) names. The list is suitable for assigning
to the text of a menu-button.

Tags: Music, MIDI
*/
function midiControllerNames
   put "Bank Select (coarse),Modulation Wheel (coarse),Breath controller (coarse),Foot Pedal (coarse),Undefined,"&\
   "Portamento Time (coarse),Data Entry (coarse),Volume (coarse),Balance (coarse),Undefined,Pan position (coarse),Expression (coarse),"&\
   "Effect Control 1 (coarse),Effect Control 2 (coarse),Undefined,Undefined,General Purpose Slider 1,General Purpose Slider 2,"&\
   "General Purpose Slider 3,General Purpose Slider 4,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,"&\
   "Undefined,Undefined,Undefined,Undefined,Bank Select (fine),Modulation Wheel (fine),Breath controller (fine),Undefined,Foot Pedal (fine),"&\
   "Portamento Time (fine),Data Entry (fine),Volume (fine),Balance (fine),Undefined,Pan position (fine),Expression (fine),Effect Control 1 (fine),"&\
   "Effect Control 2 (fine),Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,"&\
   "Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Hold Pedal (on/off),Portamento (on/off),Sustenuto Pedal (on/off),"&\
   "Soft Pedal (on/off),Legato Pedal (on/off),Hold 2 Pedal (on/off),Sound Variation,Sound Timbre,Sound Release Time,Sound Attack Time,"&\
   "Sound Brightness,Sound Control 6,Sound Control 7,Sound Control 8,Sound Control 9,Sound Control 10,General Purpose Button 1 (on/off),"&\
   "General Purpose Button 2 (on/off),General Purpose Button 3 (on/off),General Purpose Button 4 (on/off),Undefined,Undefined,Undefined,Undefined,"&\
   "Undefined,Undefined,Undefined,Effects Level,Tremulo Level,Chorus Level,Celeste Level,Phaser Level,Data Button increment,Data Button decrement,"&\
   "Non-registered Parameter (fine),Non-registered Parameter (coarse),Registered Parameter (fine),Registered Parameter (coarse),Undefined,Undefined,"&\
   "Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,Undefined,"&\
   "Undefined,Undefined,Undefined,All Sound Off,All Controllers Off,Local Keyboard (on/off),All Notes Off,Omni Mode Off,Omni Mode On,"&\
   "Mono Operation,Poly Operation" into tNameArray
   split tNameArray by comma
   combine tNameArray with cr
   return tNameArray
end midiControllerNames

/**
Name: midiNoteNumToName

Type: function

Syntax: midiNoteNumToName(<pNoteNumber>)

Summary:  Get the pitch name corrisponding to the given MIDI note number.

Introduced: 1.0

OS: mac,win,linux,ios,android

Platforms: desktop, mobile

Example:
put midiNoteNumToName(60) -- returns "C4", aka middle C

Parameters:
pNoteNumber: The MIDI note number to get the pitchname of.

Returns: String containing a pitchname such as "C#4","Db5" or "Bass Drum 1"

Description:
use midiNoteNumToName to translate MIDI Note Numbers to a more humaan readable format.
For eaxmples "C#5" is easier to recognize as C sharp on octave 5 than the '61' is, and
"Bass Drum 1" is more recognizable than it's general MIDI number '36' is.

Tags: Music, MIDI, Sound, PlayPMD, playSentence
**/
function midiNoteNumToName midiNoteNum, pOption
   if pOption <> "ch10" and pOption <> "drums" and pOption <> "flats" then
return item midiNoteNum+1 of ("C-1,C#-1,D-1,D#-1,E-1,F-1,F#-1,G-1,G#-1,A-1,A#-1,B-1,C0,C#0,D0,D#0,E0,F0,F#0,G0,G#0,A0,A#0,B0,"& \
"C1,C#1,D1,D#1,E1,F1,F#1,G1,G#1,A1,A#1,B1,C2,C#2,D2,D#2,E2,F2,F#2,G2,G#2,A2,A#2,B2,C3,C#3,D3,D#3,E3,F3,F#3,G3,G#3,A3,A#3,B3,"& \
"C4,C#4,D4,D#4,E4,F4,F#4,G4,G#4,A4,A#4,B4,C5,C#5,D5,D#5,E5,F5,F#5,G5,G#5,A5,A#5,B5,C6,C#6,D6,D#6,E6,F6,F#6,G6,G#6,A6,A#6,B6,"& \
"C7,C#7,D7,D#7,E7,F7,F#7,G7,G#7,A7,A#7,B7,C8,C#8,D8,D#8,E8,F8,F#8,G8,G#8,A8,A#8,B8,C9,C#9,D9,D#9,E9,F9,F#9,G9")
   else if pOption is "flats" then
return item midiNoteNum+1 of ("C-1,Db-1,D-1,Eb-1,E-1,F-1,Gb-1,G-1,Ab-1,A-1,Bb-1,B-1,C0,Db0,D0,Eb0,E0,F0,Gb0,G0,Ab0,A0,Bb0,B0,"& \
"C1,Db1,D1,Eb1,E1,F1,Gb1,G1,Ab1,A1,Bb1,B1,C2,Db2,D2,Eb2,E2,F2,Gb2,G2,Ab2,A2,Bb2,B2,C3,Db3,D3,Eb3,E3,F3,Gb3,G3,Ab3,A3,Bb3,B3,"& \
"C4,Db4,D4,Eb4,E4,F4,Gb4,G4,Ab4,A4,Bb4,B4,C5,Db5,D5,Eb5,E5,F5,Gb5,G5,Ab5,A5,Bb5,B5,C6,Db6,D6,Eb6,E6,F6,Gb6,G6,Ab6,A6,Bb6,B6,"& \
"C7,Db7,D7,Eb7,E7,F7,Gb7,G7,Ab7,A7,Bb7,B7,C8,Db8,D8,Eb8,E8,F8,Gb8,G8,Ab8,A8,Bb8,B8,C9,Db9,D9,Eb9,E9,F9,Gb9,G9")
   else -- pOption = "ch10" or "drum"-- drum channel
return item midiNoteNum+1 of ("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,"&\
"Bass Drum 2,Bass Drum 1,Side Stick,Snare Drum 1,Hand Clap,Snare Drum 2,Low Tom 2,Closed Hi-hat,Low Tom 1,Pedal Hi-hat,Mid Tom 2,"&\
"Open Hi-hat,Mid Tom 1,High Tom 2,Crash Cymbal 1,High Tom 1,Ride Cymbal 1,Chinese Cymbal,Ride Bell,Tambourine,Splash Cymbal,"&\
"Cowbell,Crash Cymbal 2,Vibra Slap,Ride Cymbal 2,High Bongo,Low Bongo,Mute High Conga,Open High Conga,Low Conga,High Timbale,"&\
"Low Timbale,High Agogo,Low Agogo,Cabasa,Maracas,Short Whistle,Long Whistle,Short Guiro,Long Guiro,Claves,High Wood Block,"&\
"Low Wood Block,Mute Cuica,Open Cuica,Mute Triangle,Open Triangle,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,"&\
"101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128")
   end if
end midiNoteNumToName

/**
Name: midiNoteNameToNum

Type: function

Syntax: midiNoteNameToNum(<pNoteNumber>)

Summary:  Get the pitch number corrisponding to the given MIDI note name.

Introduced: 1.0

OS: mac,win,linux,ios,android

Platforms: desktop, mobile

Example:
put midiNoteNameToNum("C4") -- returns "60", aka middle C

Parameters:
pNoteName: The MIDI note name to get the pitch number of.

Returns: A number (0-127) containing a pitch number corresponding to the name parameter.

Description:
use midiNoteNameToNum to translate a Note Name from a human readable name into a MIDI pitch number.
For eaxmples "C4" would return 60, "C#4" would return 61, and so on.
General MIDI Drum kit drum names such as "Bass Drum 1" (36) are also acceptable.

Tags: Music, MIDI, Sound, PlayPMD, playSentence
**/
function midiNoteNameToNum midiNoteName
   get itemOffset(midiNoteName,"C-1,C#-1,D-1,D#-1,E-1,F-1,F#-1,G-1,G#-1,A-1,A#-1,B-1,C0,C#0,D0,D#0,E0,F0,F#0,G0,G#0,A0,A#0,B0,"& \
   "C1,C#1,D1,D#1,E1,F1,F#1,G1,G#1,A1,A#1,B1,C2,C#2,D2,D#2,E2,F2,F#2,G2,G#2,A2,A#2,B2,C3,C#3,D3,D#3,E3,F3,F#3,G3,G#3,A3,A#3,B3,"& \
   "C4,C#4,D4,D#4,E4,F4,F#4,G4,G#4,A4,A#4,B4,C5,C#5,D5,D#5,E5,F5,F#5,G5,G#5,A5,A#5,B5,C6,C#6,D6,D#6,E6,F6,F#6,G6,G#6,A6,A#6,B6,"& \
   "C7,C#7,D7,D#7,E7,F7,F#7,G7,G#7,A7,A#7,B7,C8,C#8,D8,D#8,E8,F8,F#8,G8,G#8,A8,A#8,B8,C9,C#9,D9,D#9,E9,F9,F#9,G9")
   if it is 0 then get itemOffset(midiNoteName,"C-1,Db-1,D-1,Eb-1,E-1,F-1,Gb-1,G-1,Ab-1,A-1,Bb-1,B-1,C0,Db0,D0,Eb0,E0,F0,Gb0,G0,Ab0,A0,Bb0,B0,"& \
   "C1,Db1,D1,Eb1,E1,F1,Gb1,G1,Ab1,A1,Bb1,B1,C2,Db2,D2,Eb2,E2,F2,Gb2,G2,Ab2,A2,Bb2,B2,C3,Db3,D3,Eb3,E3,F3,Gb3,G3,Ab3,A3,Bb3,B3,"& \
   "C4,Db4,D4,Eb4,E4,F4,Gb4,G4,Ab4,A4,Bb4,B4,C5,Db5,D5,Eb5,E5,F5,Gb5,G5,Ab5,A5,Bb5,B5,C6,Db6,D6,Eb6,E6,F6,Gb6,G6,Ab6,A6,Bb6,B6,"& \
   "C7,Db7,D7,Eb7,E7,F7,Gb7,G7,Ab7,A7,Bb7,B7,C8,Db8,D8,Eb8,E8,F8,Gb8,G8,Ab8,A8,Bb8,B8,C9,Db9,D9,Eb9,E9,F9,Gb9,G9")
   if it is 0 then get itemOffset(midiNoteName, "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,"&\
   "Bass Drum 2,Bass Drum 1,Side Stick,Snare Drum 1,Hand Clap,Snare Drum 2,Low Tom 2,Closed Hi-hat,Low Tom 1,Pedal Hi-hat,Mid Tom 2,"&\
   "Open Hi-hat,Mid Tom 1,High Tom 2,Crash Cymbal 1,High Tom 1,Ride Cymbal 1,Chinese Cymbal,Ride Bell,Tambourine,Splash Cymbal,"&\
   "Cowbell,Crash Cymbal 2,Vibra Slap,Ride Cymbal 2,High Bongo,Low Bongo,Mute High Conga,Open High Conga,Low Conga,High Timbale,"&\
   "Low Timbale,High Agogo,Low Agogo,Cabasa,Maracas,Short Whistle,Long Whistle,Short Guiro,Long Guiro,Claves,High Wood Block,"&\
   "Low Wood Block,Mute Cuica,Open Cuica,Mute Triangle,Open Triangle,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,"&\
   "101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128")
   return it - 1
end midiNoteNameToNum

function gsPatchNumToName gmPatchNum, drumChannel
   if drumChannel <> "ch10" and drumChannel <> "drums" and drumChannel <> true then -- "ch10" is reserved for drums ("ch11" additionally in GM2 spec) -- and theChannel <> "ch11"
return item (gmPatchNum+1) of ("Acoustic Grand Piano,Bright Acoustic Piano,Electric Grand Piano,Honkytonk Piano,Rhodes Piano,Chorused Piano,"&\
"Harpsichord,Clavinet,Celesta,Glockenspiel,Music Box,Vibraphone,Marimba,Xylophone,Tubular Bells,Dulcimer,Hammond Organ,Percussive Organ,"&\
"Rock Organ,Church Organ,Reed Organ,Accordion,Harmonica,Tango Accordion,Nylon Guitar,Steel Guitar,Jazz Guitar,"&\
"Clean Electric Guitar,Muted Electric Guitar,Overdrive Guitar,Distorted Guitar,Guitar Harmonics,Acoustic Bass,Fingered Bass,"&\
"Picked Bass,Fretless Bass,Slap Bass 1,Slap Bass 2,Synth Bass 1,Synth Bass 2,Violin,Viola,Cello,Contrabass,Tremolo Strings,Pizzicato Strings,"&\
"Orchestral Harp,Timpani,String Ensemble1,String Ensemble2,Synth Strings 1,Synth Strings 2,Choir Aahs,Voice Oohs,Synth Voice,Orchestra Hit,"&\
"Trumpet,Trombone,Tuba,Muted Trumpet,French Horn,Brass Section,Synth Brass 1,Synth Brass 2,Soprano Sax,Alto Sax,Tenor Sax,Baritone Sax,Oboe,"&\
"English Horn,Bassoon,Clarinet,Piccolo,Flute,Recorder,Pan Flute,Bottle Blow,Shakuhachi,Whistle,Ocarina,Lead 1 Square,Lead 2 Sawtooth,"&\
"Lead 3 Calliope,Lead 4 Chiff,Lead 5 Charang,Lead 6 Voice,Lead 7 Fifths,Lead 8 Bass+Lead,Pad 1 New Age,Pad 2 Warm,"&\
"Pad 3 Polysynth,Pad 4 Choir,Pad 5 Bowed,Pad 6 Metallic,Pad 7 Halo,Pad 8 Sweep,FX 1 Rain,FX 2 Soundtrack,FX 3 Crystal,"&\
"FX 4 Atmosphere,FX 5 Brightness,FX 6 Goblins,FX 7 Echoes,FX 8 Sci-Fi,Sitar,Banjo,Shamisen,Koto,Kalimba,Bagpipe,Fiddle,Shanai,Tinkle Bell,Agogo,"&\
"Steel Drums,Woodblock,Taiko Drum,Melodic Tom,Synth Drum,Reverse Cymbal,Guitar Fret Noise,Breath Noise,Seashore,Bird Tweet,Telephone Ring,Helicopter,Applause,Gunshot")
   else -- theChannel is a drum kit channel (10)
return item (gmPatchNum+1) of ("Standard Kit,2,3,4,5,6,7,8,Room Kit,10,11,12,13,14,15,16,Power Kit,18,19,20,21,22,23,24,25,Electronic Kit,"&\
"TR-808 Kit,27,28,29,30,31,32,Jazz Kit,34,35,36,37,38,39,40,Brush Kit,42,43,44,45,46,47,48,Orchestra Kit,50,51,52,53,54,55,56,SoundFX Kit,"&\
"58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,"&\
"100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,MT-32 Kit")
   end if
end gsPatchNumToName


/**
Name: gsInstrumentNames

Type: function

Syntax: gsInstrumentNames()

Summary:
get a list of names of the GeneralMIDI standard instrument names, suitable for
assigning to the text of a menu-button

Introduced: 1.0

OS: mac,win,linux,ios,android

Platforms: desktop,mobile

Example:
put gsInstrumentNames()

Parameters:

Returns: a line delimited list of GeneralMIDI standard instrument names

Description:
Use gsInstrumentNames to get a 127 line-delimited list of the human readable
names for the GeneralMIDI standard instrument names. This list is in GeneralMIDI
order (starting with Accoustic Piano, ending with Gunshot FX) and is suitable
for assigning to the text of a menu-button.

Tags: Music, MIDI
*/
function gsInstrumentNames pDrumPatches, pReturnType
   if pDrumPatches <> "ch10" and pDrumPatches <> "drums" and pDrumPatches <> true then -- "ch10" is reserved for drums ("ch11" additionally in GM2 spec) -- and theChannel <> "ch11"
put "Acoustic Grand Piano,Bright Acoustic Piano,Electric Grand Piano,Honkytonk Piano,Rhodes Piano,Chorused Piano,"&\
"Harpsichord,Clavinet,Celesta,Glockenspiel,Music Box,Vibraphone,Marimba,Xylophone,Tubular Bells,Dulcimer,Hammond Organ,Percussive Organ,"&\
"Rock Organ,Church Organ,Reed Organ,Accordion,Harmonica,Tango Accordion,Nylon Guitar,Steel Guitar,Jazz Guitar,"&\
"Clean Electric Guitar,Muted Electric Guitar,Overdrive Guitar,Distorted Guitar,Guitar Harmonics,Acoustic Bass,Fingered Bass,"&\
"Picked Bass,Fretless Bass,Slap Bass 1,Slap Bass 2,Synth Bass 1,Synth Bass 2,Violin,Viola,Cello,Contrabass,Tremolo Strings,Pizzicato Strings,"&\
"Orchestral Harp,Timpani,String Ensemble1,String Ensemble2,Synth Strings 1,Synth Strings 2,Choir Aahs,Voice Oohs,Synth Voice,Orchestra Hit,"&\
"Trumpet,Trombone,Tuba,Muted Trumpet,French Horn,Brass Section,Synth Brass 1,Synth Brass 2,Soprano Sax,Alto Sax,Tenor Sax,Baritone Sax,Oboe,"&\
"English Horn,Bassoon,Clarinet,Piccolo,Flute,Recorder,Pan Flute,Bottle Blow,Shakuhachi,Whistle,Ocarina,Lead 1 Square,Lead 2 Sawtooth,"&\
"Lead 3 Calliope,Lead 4 Chiff,Lead 5 Charang,Lead 6 Voice,Lead 7 Fifths,Lead 8 Bass+Lead,Pad 1 New Age,Pad 2 Warm,"&\
"Pad 3 Polysynth,Pad 4 Choir,Pad 5 Bowed,Pad 6 Metallic,Pad 7 Halo,Pad 8 Sweep,FX 1 Rain,FX 2 Soundtrack,FX 3 Crystal,"&\
"FX 4 Atmosphere,FX 5 Brightness,FX 6 Goblins,FX 7 Echoes,FX 8 Sci-Fi,Sitar,Banjo,Shamisen,Koto,Kalimba,Bagpipe,Fiddle,Shanai,Tinkle Bell,Agogo,"&\
"Steel Drums,Woodblock,Taiko Drum,Melodic Tom,Synth Drum,Reverse Cymbal,Guitar Fret Noise,Breath Noise,Seashore,Bird Tweet,Telephone Ring,Helicopter,Applause,Gunshot" into tList
   else -- theChannel is a drum kit channel (10)
put "Standard Kit,2,3,4,5,6,7,8,Room Kit,10,11,12,13,14,15,16,Power Kit,18,19,20,21,22,23,24,25,Electronic Kit,"&\
"TR-808 Kit,27,28,29,30,31,32,Jazz Kit,34,35,36,37,38,39,40,Brush Kit,42,43,44,45,46,47,48,Orchestra Kit,50,51,52,53,54,55,56,SoundFX Kit,"&\
"58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,"&\
"100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,MT-32 Kit" into tList
   end if
   switch pReturnType
case "csv"
   return tList
   break
case "array"
   split tList by comma
   return tList
   break
case "list"
case ""
default
   --split tList by comma
   -- combine tList with cr
   replace comma with return in tList
   return tList
   break
   end switch
end gsInstrumentNames

/**
Name: BPMppbDurationToMillisecs

Type: function

Syntax: BPMppbDurationToMillisecs( pBPM, pPulsesPerBeat, [pDur])

Summary: Given Beats-Per-Minute and Pulses Per Beat values returns a time-length in milleseconds

Introduced: 1.0

OS: mac,win,linux,ios,android

Platforms: desktop,mobile

Example:
put BPMppbDurationToMillisecs(120,48,"s") into tDurationInMilliseconds -- milliseconds length of sixteenth note at 120bpm

Parameters:

pBPM: Beats-Per-Minute, 120 BPM is default

pPulsesPerBeat: defines is the resolution of MIDI timing information, 96 pulses per beat is the default

pDur: an xTalk playSentence duration such as "w" for whole note, down to "x" for 128th notes

Returns: Time-length in milleseconds

Description:
Given Beats-Per-Minute and Pulses Per-Beat-values returns time-lengths in milleseconds.
Use this to convert xTalk note durations into milliseconds.
Dotted-length duration modifiers are allowed ("s." is dotted-sixtenth note, "q3" is a quarter-note-triplet).
If the duration parameter is empty the returned data will be a line delimited
list of all playSentence valid note lengths in milliseconds.

Tags: Music, MIDI
*/
function BPMppbDurationToMillisecs pBPM, pPulsesPerBeat, pDur
   -- There are 60,000 milliseconds in a minute
   set the numberformat to "00.000"
   if pPulsesPerBeat is empty then
if there is a fld "Ticks Per Beat" then
   put fld "Ticks Per Beat" into pPulsesPerBeat
else
   put 96 into pPulsesPerBeat
end if
   end if
   put 60000 / pBPM into tQuarterNoteMillisecs
   put 60000 / (pBPM * pPulsesPerBeat) into tMIDIPulsePerMillisec
   -- round(9734.22,-3) -- yields 10000
   -- set the numberformat to "00.0"
   set the numberformat to "00.00"
   put round(tQuarterNoteMillisecs * 4,-2) into tWholeNoteMillisecs
   put round(tQuarterNoteMillisecs * 2,-1) into tHalfNoteMillisecs
   put round(tQuarterNoteMillisecs * 0.667,2) into tQuarterNoteTrip
   put round(tQuarterNoteMillisecs / 2,2) into tEigthNoteMillisecs
   put round(tQuarterNoteMillisecs * 0.333,2) into tEigthNoteTrip
   put round(tQuarterNoteMillisecs / 4,2) into tSixteenthNoteMillisecs
   put round(tQuarterNoteMillisecs * 0.1667,2) into tSixteenthNoteTrip
   put round(tQuarterNoteMillisecs / 8,2) into tThirtySecondNoteMillisecs
   put round(tQuarterNoteMillisecs * 0.0833,2) into tThirtySecondNoteTrip
   put round(tQuarterNoteMillisecs / 16,2) into tSixtyFourthNoteMillisecs
   put round(tQuarterNoteMillisecs * 0.04166,2) into tSixtyFourthNoteTrip
   put round(tQuarterNoteMillisecs / 32,2) into tOneTwentyEigthNoteMillisecs
   put round(tQuarterNoteMillisecs / 64,2) into tTwoFiftySixthNoteMillisecs
   if pDur is empty then
put  tMIDIPulsePerMillisec & " ms=MIDI Tick" & cr into tDurCalculations
set the numberformat to "0000.0"
put trunc(tWholeNoteMillisecs) & " ms=4=w" & cr &\
trunc(tWholeNoteMillisecs + tHalfNoteMillisecs ) & " ms=6=w." & cr &\
trunc(tWholeNoteMillisecs + tHalfNoteMillisecs + tQuarterNoteMillisecs ) & " ms=6.25=w.." & cr &\
trunc(tHalfNoteMillisecs ) & " ms=2=h" & cr &\
trunc(tHalfNoteMillisecs + tQuarterNoteMillisecs ) & " ms=2.25=h." & cr &\
trunc(tHalfNoteMillisecs + tQuarterNoteMillisecs + tEigthNoteMillisecs ) & " ms=2.375=h.." & cr \
after tDurCalculations
set the numberformat to "0000.00"
put   round (tQuarterNoteMillisecs,1) & " ms=1=q" & cr &\
round (tQuarterNoteTrip,1) & " ms=0.666=q3" & cr &\
round (tQuarterNoteMillisecs + tEigthNoteMillisecs,1) & " ms=1.5=q." & cr &\
round (tQuarterNoteMillisecs + tEigthNoteMillisecs + tSixteenthNoteMillisecs,1) & " ms=1.625=q.." & cr & \
round (tEigthNoteMillisecs,1) & " ms=0.5=e" & cr &\
round (tEigthNoteTrip,1) & " ms=0.333=e3" & cr &\
round (tEigthNoteMillisecs + tSixteenthNoteMillisecs,1) & " ms=0.75=e." &  cr &\
round (tEigthNoteMillisecs + tSixteenthNoteMillisecs + tThirtySecondNoteMillisecs,1) & " ms=0.875=e.." &  cr &\
round (tSixteenthNoteTrip, 1) & " ms=0.166=s3" & cr &\
round (tSixteenthNoteMillisecs, 1)& " ms=0.25=s" & cr &\
round (tSixteenthNoteMillisecs + tThirtySecondNoteMillisecs,1)& " ms=0.375=s." & cr &\
round (tSixteenthNoteMillisecs + tThirtySecondNoteMillisecs + tSixtyFourthNoteMillisecs,1) & " ms=0.4375=s.." & cr &\
round (tThirtySecondNoteMillisecs,1) & " ms=0.125=t" & cr &\
round (tThirtySecondNoteTrip,1) & " ms=0.083=t3" & cr &\
round (tThirtySecondNoteMillisecs + tSixtyFourthNoteMillisecs,1) & " ms=0.1875=t." & cr &\
round (tThirtySecondNoteMillisecs + tSixtyFourthNoteMillisecs + tTwoFiftySixthNoteMillisecs, 1) & " ms=0.21875=t.." & cr &\
round (tSixtyFourthNoteTrip,1) & " ms=0.041=x3" & cr &\
round (tSixtyFourthNoteMillisecs,1) & " ms=0.0625=x" & cr &\
round (tSixtyFourthNoteMillisecs + tOneTwentyEigthNoteMillisecs,1) & " ms=0.09375=x." & cr &\
round (tSixtyFourthNoteMillisecs + tOneTwentyEigthNoteMillisecs + tTwoFiftySixthNoteMillisecs,1) & " ms=0.109375=x.." \
after tDurCalculations
sort lines of tDurCalculations numeric
-- recalc timestamps
return tDurCalculations
   else
switch char 1 of pDur
   case "h"
if char 2 to 3 of pDur is ".." then
   return trunc(tHalfNoteMillisecs + tQuarterNoteMillisecs + tEigthNoteMillisecs )
else if char 2 of pDur is "." then
   return trunc(tHalfNoteMillisecs + tQuarterNoteMillisecs )
else
   return tHalfNoteMillisecs
end if
break
   case "q"
set the numberformat to "0000.00"
if char 2 to 3 of pDur is ".." then
   return round (tQuarterNoteMillisecs + tEigthNoteMillisecs + tSixteenthNoteMillisecs,1)
else if char 2 of pDur is "." then
   return round (tQuarterNoteMillisecs + tEigthNoteMillisecs,1)
else if char 2 of pDur is "3" then
   return tQuarterNoteTrip
else
   return tQuarterNoteMillisecs
end if
break
   case "e"
set the numberformat to "0000.00"
if char 2 to 3 of pDur is ".." then
   return round(tEigthNoteMillisecs + tSixteenthNoteMillisecs + tThirtySecondNoteMillisecs,1)
else if char 2 of pDur is "." then
   return round(tEigthNoteMillisecs + tSixteenthNoteMillisecs,1)
else if char 2 of pDur is "3" then
   return tQuarterNoteTrip
else
   return tEigthNoteMillisecs
end if
break
   case "s"
set the numberformat to "0000.00"

if char 2 to 3 of pDur is ".." then
   return round (tSixteenthNoteMillisecs + tThirtySecondNoteMillisecs + tSixtyFourthNoteMillisecs,1)
else if char 2 of pDur is "." then
   return round (tSixteenthNoteMillisecs + tThirtySecondNoteMillisecs,1)
else if char 2 of pDur is "3" then
   return tSixteenthNoteTrip
else
   return tSixteenthNoteMillisecs
end if
break
   case "t"
set the numberformat to "0000.00"

if char 2 to 3 of pDur is ".." then
   return round (tThirtySecondNoteMillisecs + tSixtyFourthNoteMillisecs + tTwoFiftySixthNoteMillisecs, 1)
else if char 2 of pDur is "." then
   round (tThirtySecondNoteMillisecs + tSixtyFourthNoteMillisecs, 1)
else if char 2 of pDur is "3" then
   return tSixteenthNoteTrip
else if char 2 of pDur is "3" then
   return tThirtySecondNoteTrip
else
   return tThirtySecondNoteMillisecs
end if
break
   case "x"
set the numberformat to "0000.00"
if char 2 to 3 of pDur is ".." then
   return round(tSixtyFourthNoteMillisecs + tOneTwentyEigthNoteMillisecs + tTwoFiftySixthNoteMillisecs,1)
else if char 2 of pDur is "." then
   return round(tSixtyFourthNoteMillisecs + tOneTwentyEigthNoteMillisecs,1)
else if char 2 of pDur is "3" then
   return tSixtyFourthNoteTrip
else
   return tSixtyFourthNoteTrip
end if
break
   case "w"
   default
set the numberformat to "0000.0"
if char 2 to 3 of pDur is ".." then
   return trunc(tWholeNoteMillisecs + tHalfNoteMillisecs + tQuarterNoteMillisecs )
else if char 2 of pDur is "." then
   return trunc(tWholeNoteMillisecs + tHalfNoteMillisecs )
else
   return tWholeNoteMillisecs
end if
break
end switch
   end if
end BPMppbDurationToMillisecs

-- BPM to ms Formula
-- There are 60,000 milliseconds in a minute
-- so if you want to work out how long a beat is in milliseconds for any tempo, simply follow the below formula:
-- 60,000 / BPM = one beat in milliseconds

-- Example 1: 60,000 / 100 bpm = 600ms
-- This means that if you want to set your delay pedal for a one beat delay and the tempo is 100 bpm,
-- you should set your pedal to 600ms. What if you want to set your delay to repeat eighth notes?
-- Simply halve the time for one beat. So an eighth note at 100 bpm is 300ms (600 / 2).

-- Example 2: 60,000 / 85 bpm = 705.88ms
-- This means that if you want to set your delay pedal for a half-beat delay and the tempo is 85 bpm,
-- you should set your pedal to 353ms (705.88ms / 2 = half a beat).

-- In this example the exact time of a beat is 705.88ms, so it’s important not to round it off to 706 before calculating the length of different notes.
-- Depending on what you’re calculating, rounding off before the calculation can throw your answer out quite a bit.

-- Always remember that this simple formula works out what one beat is in milliseconds,
-- so if you want to set it to 8th notes, 16th notes or anything else,
-- you will need to work out the difference as shown later.

--------------------------------------------------------------

function setMIDItrack tempoBPM, theMIDIMsgList, InstumentNum
   put empty into theMIDItrack
   -------------- SET SMPTE FPS & OFFSET
   put "25" into theFPS
   get itemOffset (25, "24,25,29.97,30")
   put item it of "00,01,10,11" into theFPS
   put 0 into theHr
   put baseConvert(theHr,10,2) into theHr
   if the number of chars in theHr < 6 then
repeat 6 - the number of chars in theHr
   put 0 before theHr
end repeat
   end if
   put theFPS & theHr into theFPSnTheHr
   put baseConvert(theFPSnTheHr,2,10) into theFPSnTheHr
   put 0 into theMin
   put 0 into theSec
   put 0 into theFrames
   put 0 into theFrameTicks
   put  binaryEncode("C",0) & binaryEncode("H2H2H2","FF","54","05")  after theMIDItrack -- deltaTime=0 & metaEvent & smpteOffset & lengthByte
   put binaryEncode("C",theFPSnTheHr) & binaryEncode("C",theMin) & binaryEncode("C",theSec) & binaryEncode("C",theFrames) & binaryEncode("C",theFrameTicks) after theMIDItrack
   --------     END "SMPTE offset" -- SMPTE Offset 05 FP-hh mm ss fr ff
   --------------- SET TEMPO--------------
   if (tempoBPM is empty) or (tempoBPM is not a number) or (tempoBPM<1) or (tempoBPM>240) then
put 120 into tempoBPM -- 120 is default MIDI tempo
   else
--put the round of tempoBPM into tempoBPM
   end if
   put round ((60000000/tempoBPM), 0 ) into microSecsPerQrtNtBeat
   --   MICROSECONDS_PER_MINUTE = 60,000,000 -- BPM = MICROSECONDS_PER_MINUTE / MPQN -- MPQN = MICROSECONDS_PER_MINUTE / BPM
   -- answer microSecsPerQrtNtBeat
   get baseConvert(microSecsPerQrtNtBeat,10,16)
   if the number of chars in it <6 then
repeat 6-(the number of chars in it)
   put "0" before it
end repeat
   end if
   --put it && microSecsPerQrtNtBeat
   put  binaryEncode("C",0) & binaryEncode("H2H2H2","FF","51","03") & binaryEncode("H6",it) after theMIDItrack  -- set tempo
   ------[deltaTime=0] & [MetaEvent = 255 (0xFF)] & [eventType=81 (0x51)] & [length=3] & [microSecsPerQrtNtBeat 0-8355711]
   --------------- END SET TEMPO--------------

   --------------- SET TIME SIGNATURE------------
   put 4 into TimeSigNumerator -- Numerator is a literal value
   --- the denominator is specified as the value to which the power of 2 must be raised to equal the number of subdivisions per whole note.
   --  For example, a value of 0 means a whole note because 2 to the power of 0 is 1 (whole note), a value of 1 means a half-note
   -- because 2 to the power of 1 is 2 (half-note), and so on. 0=1, 1=2, 2=4, 3=8, 4=16, 5=32, 6=64, 7=128, etc. --  4=2^4 = 16 and 4/16 = 4
   put 2 into TimeSigDenominator  --  4=2^4 = 16 and Num=4/Denom=16 = 4 = beats per measure

   put 24 into TimeSigMetroClicksPerQtrNt
   put 8 into TimeSigThtySndsPerQrtNt  --- when would this not be 8 ??? ---
   put  binaryEncode("C",0) & binaryEncode("H2H2H2","FF","58","04") & \
   binaryEncode("C",TimeSigNumerator) & binaryEncode("C",TimeSigDenominator) & \
   binaryEncode("C",TimeSigMetroClicksPerQtrNt) & binaryEncode("C",TimeSigThtySndsPerQrtNt) after theMIDItrack
   ------[deltaTime=0] & [MetaEvent = 255 (0xFF)] & [eventType=88 (0x58)] & [length=4] & ...
   --------------- END SET TIME SIGNATURE------------

   --- SET INSTRUMENT PROGRAM NUM
   put binaryEncode("H2","C9") into msgTypeByte --
   put binaryEncode("C",25) into instrumentProgramNum -- 25=GS Electronic Drum Kit
   get wholeNumToVLQ(0) -- pack delta time
   put binaryEncode("H"&length(it),it) after theMIDItrack
   put msgTypeByte & instrumentProgramNum after theMIDItrack

   --Delta Time msgTypeByte & theVelocityByte after theMIDItrack  -- note & velocity
   --    put abstT2Str( 2 ) & "," & "C" & partHex & num2Hex( aNum -1, 2 ) & return after resultHex -- program change( CN#12 )

   -- END SET INSTRUMENT

   put 0 into timeSinceLastEvent
   put 0 into tLastTimeStamp
   repeat with lineCnt = 1 to the number of lines in theMIDIMsgList
put word 1 of line lineCnt of theMIDIMsgList into tTimeStamp
delete word 1 of line lineCnt of theMIDIMsgList
get word 1 of line lineCnt of theMIDIMsgList
switch it
   case empty
exit repeat
   case "noteon"
delete word 1 of line lineCnt of theMIDIMsgList
put word 1 of line lineCnt of theMIDIMsgList into tChannel
delete word 1 of line lineCnt of theMIDIMsgList
-- put tChannel
replace "note=" with "" in line lineCnt of theMIDIMsgList
put binaryEncode("H2","90") into msgTypeByte --Hex 90 (=ch1) to 9F (= ch16)
put binaryEncode("C",127) into theVelocityByte
-- put line lineCnt of theMIDIMsgList
if tTimeStamp is not empty then
   put tTimeStamp - tLastTimeStamp into timeSinceLastEvent
   put tTimeStamp into tLastTimeStamp
   --put timeSinceLastEvent
end if
put wholeNumToVLQ(timeSinceLastEvent) into bTimeSinceLastEvent -- pack delta time-- pack delta time
put binaryEncode("H"&length(bTimeSinceLastEvent),bTimeSinceLastEvent) into bTimeSinceLastEvent
repeat with z = 1 to the number of words in item 1 of line lineCnt of theMIDIMsgList
   if z>1 then
put binaryEncode("C",0) into bTimeSinceLastEvent -- 0 change to Delta Time (chord)
   end if
   put bTimeSinceLastEvent & msgTypeByte after theMIDItrack --Delta Time & Message Type w/chan
   get word z of line lineCnt of theMIDIMsgList
   -- put it after msg
   put binaryEncode("C",item 1 of it) & theVelocityByte after theMIDItrack  -- note & velocity
end repeat
break
   case "noteoff"
delete word 1 of line lineCnt of theMIDIMsgList
put word 1 of line lineCnt of theMIDIMsgList into tChannel
delete word 1 of line lineCnt of theMIDIMsgList
replace "note=" with "" in line lineCnt of theMIDIMsgList
put binaryEncode("H2","80") into msgTypeByte --Hex 80 (=ch1) to 8F (= ch16)
put binaryEncode("C",0) into theVelocityByte
if tTimeStamp is not empty then
   put tTimeStamp - tLastTimeStamp into timeSinceLastEvent
   put tTimeStamp into tLastTimeStamp
   --put timeSinceLastEvent
end if
put wholeNumToVLQ(timeSinceLastEvent) into bTimeSinceLastEvent -- pack delta time-- pack delta time
put binaryEncode("H"&length(bTimeSinceLastEvent),bTimeSinceLastEvent) into bTimeSinceLastEvent
repeat with z = 1 to the number of items in word 1 of line lineCnt of theMIDIMsgList
   if z>1 then
put binaryEncode("C",0) into bTimeSinceLastEvent -- 0 change to Delta Time (chord)
   end if
   put bTimeSinceLastEvent & msgTypeByte after theMIDItrack --Delta Time & Message Type w/chan
   get word z of line lineCnt of theMIDIMsgList
   put it after msg
   put binaryEncode("C",item 1 of it) & binaryEncode("C",item 2 of it) after theMIDItrack  -- note & velocity
end repeat
break
end switch
   end repeat
   -- answer theMIDIMsgList
   --------------- END OF TRACK ---------------
   get wholeNumToVLQ(10) -- pack delta time
   put binaryEncode("H"&length(it),it) after theMIDItrack --Delta Time
   put binaryEncode("H6","FF2F00") after theMIDItrack  -- end of track

   --------------- INSERT BEGINNING OF TRACK w/Length ---------------
   put "MTrk" & binaryEncode("M",length(theMIDItrack)) before theMIDItrack -- add begining of track + 4 byte chunk length
   ---------------
   return theMIDItrack
end setMIDItrack

function setMIDIHeader formatType, numOfTracks, timeDivision
   put "MThd" into theMIDIheader
   put binaryEncode("M",6) after theMIDIheader -- 4 byte chunk length (always=6 in decimal) - Network byte order
   ---------------
   if (formatType <>0) and (formatType<>1) and (formatType<>2) then
return "An Error Has Occured: Invalid Format Type"
exit setMIDIHeader
   end if
   put binaryEncode("m",formatType) after theMIDIheader -- 2 byte MIDI file type 0,1,or 2 - Network byte order
   ---------------
   if (numOfTracks is empty) or (numOfTracks is not a number) or (numOfTracks contains ".") or (numOfTracks > 65535) or (numOfTracks <1) then
return "An Error Has Occured: Invalid Number of Tracks"
exit setMIDIHeader
   end if
   put binaryEncode("m",numOfTracks) after theMIDIheader -- 2 byte number of tracks 1 - 65,535 - Network byte order
   ---------------
   put item 1 of timeDivision into timeDivType
   put item 2 of timeDivision into timeDivValue
   if timeDivValue is empty or timeDivValue is not a number then
return "An Error Has Occured: Invalid Time Division Value"
exit setMIDIHeader
   end if
   switch timeDivType
case "TicksPerBeat"
   put "0" into timeDivType
   put baseConvert(timeDivValue,10,2) into timeDivValue
   if the number of chars in timeDivValue<15 then
repeat (15-the number of chars in timeDivValue)
   put "0" before timeDivValue
end repeat
   end if
   answer timeDivType && timeDivValue
   put binaryEncode("B16", timeDivType & timeDivValue) after theMIDIheader -- 16 bits time division (1bit type & 15bits value)
   break
case "SMPTE"
   put "1" into timeDivType
   put baseConvert(timeDivValue,10,2) into timeDivValue
   if the number of chars in timeDivValue<7 then
repeat (7-the number of chars in timeDivValue)
   put "0" before timeDivValue
end repeat
   end if
   put item 3 of timeDivision into ticksPerFrame
   if ticksPerFrame is empty or ticksPerFrame >255 or ticksPerFrame is not a number then
return "An Error Has Occured: Invalid Time Division Value: Ticks Per Frame"
exit setMIDIHeader
   end if
   put baseConvert(ticksPerFrame,10,16) into ticksPerFrame
   if the number of chars in ticksPerFrame<2 then
put "0" before ticksPerFrame
   end if
   -- put baseConvert((timeDivType & timeDivValue),2,16) into TimeDivValueH
   -- answer "timeDivType: "& timeDivType &cr& "TimeDivValueH: "& TimeDivValueH &cr& "ticksPerFrame: "& ticksPerFrame
   -- put binaryEncode("H2", TimeDivValueH) after theMIDIheader -- 16 bits time division (1bit type & 7 bits value followed by 1 byte value bellow)
   put binaryEncode("B16", timeDivType & timeDivValue) after theMIDIheader -- 16 bits time division (1bit type & 7 bits value followed by 1 byte value bellow)
   put binaryEncode("H2", ticksPerFrame) after theMIDIheader -- 16 bits time division (1bit type & 7 bits value followed by 1 byte value bellow)
   break
default
   return "An Error Has Occured: Invalid Time Division Value"
   exit setMIDIHeader
   break
   end switch
   ---------------
   return theMIDIheader
end setMIDIHeader

--Offset	Length	Type	Description	Value
--0x00	4	char[4]	chunk ID	"MThd" (0x4D546864)
--0x04	4	dword	chunk size	6 (0x00000006)
--0x08	2	word	format type	0 - 2
--0x10	2	word	number of tracks	1 - 65,535
--0x12	2	word	time division see below
--Time Division
--The third and final word in the MIDI header chunk is a bit more complicated than the first two.
--It contains the time division used to decode the track event delta times into "real" time.
--This value is represents either ticks per beat or frames per second.
-- If the top bit of the word (bit mask 0x8000) is 0, the following 15 bits describe the time division in ticks per beat.
--Otherwise the following 15 bits (bit mask 0x7FFF) describe the time division in frames per second.

----Ticks per beat translate to the number of clock ticks or track delta positions (described in the Track Chunk section)
-- in every quarter note of music. Common values range from 48 to 960, although newer sequencers go far beyond
-- this range to ease working with MIDI and digital audio together.

----Frames per second is defined by breaking the remaining 15 bytes into two values. The top 7 bits (bit mask 0x7F00)
-- define a value for the number of SMPTE frames and can be 24, 25, 29 (for 29.97 fps) or 30.
-- The remaining byte (bit mask 0x00FF) defines how many clock ticks or track delta positions there are per frame.
-- So a time division example of 0x9978 could be broken down into it's three parts: the top bit is one,
-- so it is in SMPTE frames per second format, the following 7 bits have a value of 25 (0x19) and the bottom byte has a value of 120 (0x78).
-- This means the example plays at 24 frames per second SMPTE time and has 120 ticks per frame.

---

/**
Name: getMIDIHeader

Type: function

Summary: Use getMIDIHeader to validate MIDI file formatted data and parse
its header information into a human readable format

Example:
put getMIDIHeader("/path/to/MIDIFile.mid") into fld "MIDI File Info"

Description:
Use getMIDIHeader to validate MIDI file formatted data and parse
its header for information about the file, intial timing info, channels used,
atc., into a human readable format
*/
function getMIDIHeader theMIDIFile
   if there is not a file theMIDIFile then
return "Error opening file " & cr & theMIDIFile
exit getMIDIHeader
   end if
   open file theMIDIFile for binary read
   read from file theMIDIFile for 4 bytes
   if it is not "MThd" then
read from file theMIDIFile until "MThd"
put "NOT a Standard Midi file but! MIDI Header Chunk Not at Beginning of file!" & cr \
& "Header found at offset " & (length(it)-4) & cr into theMIDIheaderInfo
--close file theMIDIFile
--return "Not a Valid MIDI File"
--exit getMIDIHeader
   else
put "MIDI Header Info:" & cr into theMIDIheaderInfo
   end if
   --------------
   read from file theMIDIFile for 4 bytes
   put binaryDecode("M",it, headerChunkLength) into readStatus
   put "headerChunkLength=" & headerChunkLength & cr after theMIDIheaderInfo -- 4 byte chunk length (always 6?) - Network byte order
   ---------------
   read from file theMIDIFile for 2 bytes
   put binaryDecode("m",it,formatType) into readStatus -- 2 byte MIDI file type 0,1,or 2 - Network byte order
   put "formatType=" & formatType & cr after theMIDIheaderInfo -- 4 byte chunk length (always 6?) - Network byte order
   ---------------
   read from file theMIDIFile for 2 bytes
   put binaryDecode("m",it,numOfTracks) into readStatus -- 2 byte number of tracks 1 - 65,535 - Network byte order
   put "numOfTracks=" & numOfTracks & cr after theMIDIheaderInfo -- 4 byte chunk length (always 6?) - Network byte order
   ---------------
   read from file theMIDIFile for 2 bytes
   put binaryDecode("B16",it,timeDivision) into readStatus
   if char 1 of timeDivision = 0 then
put "TicksPerBeat"into timeDivType
delete char 1 of timeDivision
put baseConvert(timeDivision,2,10) into timeDivValue
put "timeDivType=" & timeDivType & cr & "timeDivValue "& timeDivValue & cr after theMIDIheaderInfo
   end if
   if char 1 of timeDivision = 1 then
put "SMPTE"into timeDivType
delete char 1 of timeDivision
put baseConvert(char 1 to 7 of timeDivision, 2, 10) into timeDivValue
delete char 1 to 7 of timeDivision
put baseConvert(timeDivision, 2, 10) into ticksPerFrame
put "timeDivType=" & timeDivType & cr & "timeDivValue="& timeDivValue &&  "ticksPerFrame="& ticksPerFrame & cr after theMIDIheaderInfo
   end if
   ---------------
   close file theMIDIFile
   return theMIDIheaderInfo
end getMIDIHeader


--- A util function converts a whole number integer into a string of
-- bytes as hex chars which represent a Variable Length Quantity.
-- VLQ are 7-bits per byte values of various lengths up to 56 bits ( 8 bytes of 7 bits).
-- VLQ is required for writing delta times to MIDI file format files.
function wholeNumToVLQ theWholeNum
   -- baseConvert(number,originalBase,destinationBase)
   if theWholeNum < 127 then -- its a single byte value and theres no need to process it
put baseConvert(theWholeNum,10,16) into VQLinHex
if the number of chars in VQLinHex=1 then put "0" before VQLinHex
return VQLinHex
exit wholeNumToVLQ
   end if
   put baseConvert(theWholeNum,10,2) into theBits
   --put theBits
   --put baseConvert(theBits,2,10)
   put number of chars in theBits into x
   put 0 into bitCounter
   put empty into the7bitBytes
   repeat
if char x of theBits is not empty then
   put char x theBits before the7bitBytes
   delete char x of theBits
   if theBits is empty then exit repeat
   put number of chars in theBits into x
   add 1 to bitCounter
   if bitCounter=7 then
put "," before the7bitBytes
put 0 into bitCounter
next repeat
   end if
else
   exit repeat
end if
   end repeat
   -- put cr & the7bitBytes after msg
   get the number of chars in item 1 of the7bitBytes
   if it<7 then
put 7 - it into x
repeat x
   put "0" before item 1 of the7bitBytes
end repeat
   end if
   put the number of items in the7bitBytes into y
   repeat with x = 1 to y
if x is not y then
   put "1" before item x of the7bitBytes
else
   put "0" before item x of the7bitBytes
end if
put baseConvert(item x of the7bitBytes,2,16) into item x of the7bitBytes
if the number of chars in item x of the7bitBytes<2 then put "0" before item x of the7bitBytes
put item x of the7bitBytes after VQLinHex
   end repeat
   -- return the7bitBytes
   return VQLinHex
end wholeNumToVLQ

--- A util function to check if a string is a valid as a positive whole number (unsigned integer)
function isWholeNumString theString
   put the number of chars in theString into y
   repeat with x = 1 to y
if char x of theString is not in "0123456789" then
   return false
   exit isWholeNumString
end if
   end repeat
   return true
end isWholeNumString

--- A util function converts a Variable Length Quantity (VLQ are 7-bit) string of
-- bytes as hex chars into normal a whole number values.
-- VLQ is required for reading delta times in MIDI file format files.
function VLQtoWholeNum theHexVLQ
   -- The number must be an integer between zero and 4,294,967,295
   -- or baseConvert fails to produce accurate results
   ----------------------------even still this function is broken!!!----
   put baseConvert(theHexVLQ,16,2) into theBits
   put 0 into bitCounter
   put empty into the8bitBytes
   repeat
if char 1 of theBits is not empty then
   put char 1 theBits after the8bitBytes
   delete char 1 of theBits
   if theBits is empty then exit repeat
   add 1 to bitCounter
   if bitCounter=8 then
put "," after the8bitBytes
put 0 into bitCounter
next repeat
   end if
else
   exit repeat
end if
   end repeat
   -- put the8bitBytes
   put the number of items in the8bitBytes into y
   repeat with x = 1 to y
put char 1 of item x of the8bitBytes into lengthCntrlBit
delete char 1 of item x of the8bitBytes
if the number of chars in item x of the8bitBytes < 7 then
   repeat 7 - (the number of chars in item x of the8bitBytes)
put "0" before item x of the8bitBytes
   end repeat
end if
put item x of the8bitBytes after WholeNumInBinary
switch lengthCntrlBit
   case "1"
next repeat
break
   case "0"
exit repeat
break
end switch
   end repeat
   return baseConvert(WholeNumInBinary,2,10)
end VLQtoWholeNum

--- util function checks if string is valid hex chars
function isHexString theString
   if char 1 to 2 of theString is "0x" then delete char 1 to 2 of theString
   put the number of chars in theString into y
   repeat with x = 1 to y
if char x of theString is not in "abcdefABCDEF0123456789" then
   return false
end if
   end repeat
end isHexString

--Offset	Length	Type	Description	Value
--0x00	4	char[4]	chunk ID	"MThd" (0x4D546864)
--0x04	4	dword	chunk size	6 (0x00000006)
--0x08	2	word	format type	0 - 2
--0x10	2	word	number of tracks	1 - 65,535
--0x12	2	word	time division see below
--Time Division
--The third and final word in the MIDI header chunk is a bit more complicated than the first two.
--It contains the time division used to decode the track event delta times into "real" time.
--This value is represents either ticks per beat or frames per second.
-- If the top bit of the word (bit mask 0x8000) is 0, the following 15 bits describe the time division in ticks per beat.
--Otherwise the following 15 bits (bit mask 0x7FFF) describe the time division in frames per second.

----Ticks per beat translate to the number of clock ticks or track delta positions (described in the Track Chunk section)
-- in every quarter note of music. Common values range from 48 to 960, although newer sequencers go far beyond
-- this range to ease working with MIDI and digital audio together.

----Frames per second is defined by breaking the remaining 15 bytes into two values. The top 7 bits (bit mask 0x7F00)
-- define a value for the number of SMPTE frames and can be 24, 25, 29 (for 29.97 fps) or 30.
-- The remaining byte (bit mask 0x00FF) defines how many clock ticks or track delta positions there are per frame.
-- So a time division example of 0x9978 could be broken down into it's three parts: the top bit is one,
-- so it is in SMPTE frames per second format, the following 7 bits have a value of 25 (0x19) and the bottom byte has a value of 120 (0x78).
-- This means the example plays at 24 frames per second SMPTE time and has 120 ticks per frame.

--x: output amount null characters
--a: encode amount characters as characters, padding with nulls
--A: encode amount characters as characters, padding with spaces
--b: encode amount groups of 4 1s and 0s as bits
--B: encode amount groups of 4 1s and 0s as bits, starting at the high end of each byte
--h: encode amount groups of 2 characters as hexadecimal numbers
--H: encode amount groups of 2 characters as hexadecimal, starting at the high end of each byte
--c: encode amount numbers as signed 1-byte integers
--C: encode amount numbers as unsigned 1-byte integers
--s: encode amount numbers as signed 2-byte integers in host byte order
--S: encode amount numbers as unsigned 2-byte integers in host byte order
--i: encode amount numbers as signed 4-byte integers in host byte order
--I: encode amount numbers as unsigned 4-byte integers in host byte order
--n: encode amount numbers as signed 2-byte integers in network byte order
--N: encode amount numbers as signed 4-byte integers in network byte order
--m: encode amount numbers as unsigned 2-byte integers in network byte order
--M: encode amount numbers as unsigned 4-byte integers in network byte order
--f: encode amount numbers as single-precision floating-point numbers
--d: encode amount numbers as double-precision floating-point numbers


------------ SOUNDFONT2 / DLS Utils --------------------------------

-- getRIFFHeaderInfo() returns RIFF four-char OStype code, comma, and the RIFF Length
-- put getRIFFHeaderInfo(tRIFFfile) into tRIFFInfo
-- put item 1 of tRIFFInfo into pRIFFtype
-- check that it is a Sound Bank RIFF format (SF2 or DLS file)------
-- if tRIFFtype <> "DLS " and tRIFFtype <> "sfbk" then ...
function getRIFFHeaderInfo pRIFFFile
   if there is a file pRIFFFile then
-------- check file has a RIFF header --------
open file tRIFFfile for binary read
read from file tRIFFfile for 4 bytes
if it <> "RIFF" then
   close file tRIFFfile
   return "ERROR: File is not RIFF, SIG= " & it
   exit to top
end if
--- get RIFF Length ------
read from file pRIFFFile for 4 bytes
get binaryDecode("I",it,tLength)
put "," & tLength into tRIFFLength
--- get RIFF Type ------
read from file pRIFFFile for 4 bytes
put it into tRIFFtype
return tRIFFtype,tRIFFLength
   else
return "ERROR: file does not exist"
   end if
end getRIFFHeaderInfo

/**
Name: scanStdSoundBankDirectories

Type: function

Syntax: scanStdSoundBankDirectories()

Introduced: 1.0

OS: mac,win,linux,ios,android

Platforms: desktop,mobile

Summary: Use scanStdSoundBankDirectories to scan filesysten directories where
soundbank files are normally found. On macOS and Windows this should return the
path to the standard Roland GS Soundbank.

Parameters:

Returns: A line-deimited list of any SoundBank files found

Example:
put scanStdSoundBankDirectories()

Description:
Use scanStdSoundBankDirectories to scan filesysten directories where
soundbank files are normally found. On macOS and Windows this should return
the path to the standard Roland GS Soundbank.

Tags: Music, MIDI, SoundBank
*/
function scanStdSoundBankDirectories
   -- global TheSoundBanks; put scanStdSoundBankDirectories() into TheSoundBanks; put TheSoundBanks;
   if the platform is "MacOS" then
      put "gs_instruments.dls" into tSoundBankFileNames
      put "/System/Library/Components/CoreAudio.component/Contents/Resources/gs_instruments.dls" into tPathList
      set the folder to "/Library/Audio/Sounds/Banks/"
   else if the platform is "Win32" then
      if there is a file "C:\windows\system32\drivers\gm.dls" then
         put  "C:\windows\system32\drivers\gm.dls" into tPathList
         set the folder to "C:\Windows\system32\drivers\"
      else if there is a file "C:\Windows\SysWOW64\drivers\gm.dls" then
         put  "C:\windows\SysWOW64\drivers\gm.dls" into tPathList
         set the folder to "C:\Windows\SysWOW64\drivers\"
      end if
   else if the platform is "Linux" then
      if there is a file "/usr/share/sounds/sf2/FluidR3_GM.sf2" then
         put  "/usr/share/sounds/sf2/FluidR3_GM.sf2" into tPathList
         -- Maybe also check for "GeneralUser.sf2"
         set the folder to "/usr/share/sounds/sf2/"
      else if there is a file "/usr/share/soundfonts/default.sf2" then
         put  "/usr/share/soundfonts/default.sf2" into tPathList
         set the folder to "/usr/share/soundfonts/"
      end if
   end if

   put cr & "HyperSounds.sf2" after tSoundBankFileNames
   put cr& GetHyperSoundsFont() after tPathList

   put the files into tFileNames
   filter lines of tFileNames with "*.sf2" into tSF2Names
   filter lines of tFileNames with "*.dls" into tDLSNames
   put tSF2Names &cr& tDLSNames into tFileNames
   if tFileNames<> empty then
      put cr & tFileNames after tSoundBankFileNames
      repeat for each line theLine in tFileNames
         set cursor to busy

         if theLine <> empty then
            put cr& "/Library/Audio/Sounds/Banks/" & theLine after tPathList
         end if
      end repeat
   end if

   put empty into tFileNames
   put specialFolderPath("Home") & "/Library/Audio/Sounds/Banks/" into tWrkDir
   --put tWrkDir
   set the folder to tWrkDir
   put the files into tFileNames
   filter lines of tFileNames with "*.sf2" into tSF2Names
   filter lines of tFileNames with "*.dls" into tDLSNames
   if (tSF2Names & tDLSNames) <> empty then
      --put cr after tPathList
      put cr after tSoundBankFileNames
   end if
   put tSF2Names &cr& tDLSNames into tFileNames
   if tFileNames<> empty then
      put tFileNames after tSoundBankFileNames
      repeat for each line theLine in tFileNames
         set cursor to busy
         if theLine <> empty then
            put cr& tWrkDir & theLine after tPathList
         end if
      end repeat
      -- put tPathList after msg
   end if
   filter lines of tSoundBankFileNames without empty
   -- put tSoundBankFileNames into me
   -- set the PathList of me to tPathList
   return tPathList
   -- put the PathList of me
end scanStdSoundBankDirectories

/**
Summary: Use isSF2orDLS to ensure that the given file contains a RIFF
header and has a type signature for either an SF2 or DLS Soundbank.
Name: SF2orDLSmagicNumCheck

Example:
if SF2orDLSmagicNumCheck("~/Path/To/ASoundbank.exs") is false then exit to top

Description:
SF2orDLSmagicNumCheck returns true if the given file contains a RIFF
header and also conatains a type signature for either an SF2 or DLS Soundbank.
*/
function isSF2orDLS pFile
   open file pFile for binary read
   read from file pFile for 16 bytes
   close file pFile
   if it contains "RIFF" then
if it contains "sfbk" then
   return "SFBK"
else if it contains "DLS " then
   return "DLS"
else
   return false
end if
   else
return false
   end if
end isSF2orDLS

/**
Name: getSF2Info

Type: function

Syntax: getSF2Info( pSF2FilePath )

Introduced: 1.0

OS: mac,win,linux,ios,android

Platforms: desktop,mobile

Parameters:

pSF2FilePath: A file path that points to SoundFont2 (.sf2) file

Summary: getSF2Info extracts and returns various metadata information for a given
SoundFont(.sf2) file.

Example:
put getSF2Info("/Path/To/My/SoundBank.sf2") into tSoundbankInfo

Description:
getSF2Info extracts and returns various metadata information for a given
SoundFont(.sf2) file, or empty if no metadata is found.
*/
function getSF2Info pRIFFfile
   if there is not a file pRIFFfile then
return "ERROR not a valid file path"
exit getSF2Info
   end if
   open file pRIFFfile for binary read
   read from file pRIFFfile for 4 bytes
   if it <> "RIFF" then
put "ERROR file is not RIFF! SIG= " & it & cr after tDump
close file pRIFFfile
return tDump
exit getSF2Info
   else
-- put "FILE IS RIFF, Sig4CC = " & it & cr after tDump
repeat 3
   read from file pRIFFfile until "LIST"
   read from file pRIFFfile for 4 bytes
   get binaryDecode("I",it,tLength)
   read from file pRIFFfile for 4 bytes
   put it into tListType
   if tListType = "INFO" then
-- put "LIST Byte Length=" & tLength & cr after tDump
-- put "LIST Type=" & tListType & cr after tDump
read from file pRIFFfile for tLength bytes
put it into tInfoChunk
repeat
   if tInfoChunk is empty then exit repeat --- or tSubType is "LIST"
   put byte 1 to 4 of tInfoChunk into tSubType
   -- put "SubChunkType=" & tSubType & cr after tDump
   delete byte 1 to 4 of tInfoChunk
   switch tSubType
case "ifil"
   get byte 1 to 4 of tInfoChunk
   get binaryDecode("I",it,tLength)
   -- if tLength > 4 then exit to top -- extra error check
   -- put "ifil length=" & tLength & cr after tDump
   delete byte 1 to 4 of tInfoChunk
   -- The ifil sub-chunk is a mandatory sub-chunk identifying the SoundFont specification version
   -- level to which the file complies. It is always four bytes in length, and contains data a structure: WORD wMajor; WORD wMinor;
   get byte 1 to 2 of tInfoChunk
   get binaryDecode("S",it,tMaj)
   delete byte 1 to 2 of tInfoChunk
   get byte 1 to 2 of tInfoChunk
   get binaryDecode("S",it,tMin)
   delete byte 1 to 2 of tInfoChunk
   put "Target Soundfont Version:" & tMaj &".0" & tMin & cr after tDump
   next repeat
   break
case "INAM"
   get byte 1 to 4 of tInfoChunk
   get binaryDecode("I",it,tLength)
   -- put "INAM length=" & tLength & cr after tDump
   delete byte 1 to 4 of tInfoChunk
   get byte 1 to tLength of tInfoChunk
   if it <> empty then
put "Name:" & it & cr after tDump
delete byte 1 to tLength of tInfoChunk
   end if
   next repeat
   break
case "isng" -- default isng field is the eight bytes representing “EMU8000”
   get byte 1 to 4 of tInfoChunk
   get binaryDecode("I",it,tLength)
   -- put "isng length=" & tLength & cr after tDumps
   delete byte 1 to 4 of tInfoChunk
   get byte 1 to tLength of tInfoChunk
   if it <> empty then
put "Target Wavetable Engine:" & it & cr after tDump
delete byte 1 to tLength of tInfoChunk
   end if
   next repeat
   break
case "IENG"
   get byte 1 to 4 of tInfoChunk
   get binaryDecode("I",it,tLength)
   -- put tSubType & " length=" & tLength & cr after tDump
   delete byte 1 to 4 of tInfoChunk
   get byte 1 to tLength of tInfoChunk
   if it <> empty then
put "Sound Engineering by:" & it & cr after tDump
delete byte 1 to tLength of tInfoChunk
   end if
   next repeat
   break
case "ICRD"
   get byte 1 to 4 of tInfoChunk
   get binaryDecode("I",it,tLength)
   -- put tSubType & " length=" & tLength & cr after tDump
   delete byte 1 to 4 of tInfoChunk
   get byte 1 to tLength of tInfoChunk
   if it <> empty then
put "Creation Date:" & it & cr after tDump
delete byte 1 to tLength of tInfoChunk
   end if
   next repeat
   break
case "IPRD"
   get byte 1 to 4 of tInfoChunk
   get binaryDecode("I",it,tLength)
   -- put tSubType & " length=" & tLength & cr after tDump
   delete byte 1 to 4 of tInfoChunk
   get byte 1 to tLength of tInfoChunk
   if it <> empty then
put "Target Products:" & it & cr after tDump
delete byte 1 to tLength of tInfoChunk
   end if
   next repeat
   break
   break
case "ICOP"
   get byte 1 to 4 of tInfoChunk
   get binaryDecode("I",it,tLength)
   -- put tSubType & " length=" & tLength & cr after tDump
   delete byte 1 to 4 of tInfoChunk
   get byte 1 to tLength of tInfoChunk
   if it <> empty then
put "Copyright=" & it & cr after tDump
delete byte 1 to tLength of tInfoChunk
   end if
   next repeat
   break
   break
case "ISFT"
   get byte 1 to 4 of tInfoChunk
   get binaryDecode("I",it,tLength)
   -- put tSubType & " length=" & tLength & cr after tDump
   delete byte 1 to 4 of tInfoChunk
   get byte 1 to tLength of tInfoChunk
   if it <> empty then
put "Origin Software:" & it & cr after tDump
delete byte 1 to tLength of tInfoChunk
   end if
   next repeat
   break
   break
case "ICMT"
   get byte 1 to 4 of tInfoChunk
   get binaryDecode("I",it,tLength)
   -- put tSubType & " length=" & tLength & cr after tDump
   delete byte 1 to 4 of tInfoChunk
   get byte 1 to tLength of tInfoChunk
   if it <> empty then
put "Comments:" & it & cr after tDump
delete byte 1 to tLength of tInfoChunk
   end if
   next repeat
   break
case "LIST"
   -- if the last line of fld Dump is "SubChunkType=LIST" then delete the last line of fld Dump
   put true into tLoopBreak
   exit repeat
   break
default
   exit repeat
   break
   end switch
end repeat
if tBreak then
   -- close file pRIFFfile
   exit repeat
end if
   else
next repeat
   end if
end repeat
close file pRIFFfile
   end if
   return tDump
end getSF2Info

/**
Name: getDLSInfo

Type: function

Syntax: getDLSInfo( pDLSFilePath )

Introduced: 1.0

OS: mac,win,linux,ios,android

Platforms: desktop,mobile

Parameters:

pDLSFilePath: A file path that points to DownLoadable Soundbank(.dls) file

Returns: information about a DLS file or empty if no metadata is found in the target file.

Summary: getDLSInfo returns the copyright information and the sound engineers info
for a given DownLoadable Soundbank(.dls) file, if the property is set.

Example:
put getDLSInfo("/Path/To/My/SoundBank.dls")

Description:
getDLSInfo returns the copyright information and the sound engineers info
for a given DownLoadable Soundbank(.dls) file, if the property is set, or empty.
*/
function getDLSInfo pRIFFfile
   PUT "Copyright(s): " & getDLSCopyRightInfo(pRIFFfile) into tReturnData
   put the result
   PUT cr & "Sound Engineer(s): " & getDLSEngineersInfo(pRIFFfile) after tReturnData
   return tReturnData
end getDLSInfo

/**
Name: getDLSCopyRightInfo

Type: function

Syntax: getDLSCopyRightInfo( pDLSFilePath )

Introduced: 1.0

OS: mac,win,linux,ios,android

Platforms: desktop,mobile

Summary: getDLSCopyRightInfo returns the copyright information for a DownLoadable
Soundbank(.dls) file, if the property is set.

Parameters:

pDLSFilePath: A file path that points to DownLoadable Soundbank(.dls) file

Returns: copyright information or empty if the property is not found in the target file.

Example:
put getDLSCopyRightInfo("/Path/To/ASoundBank.dls") into tCopyRight

Description:
getDLSCopyRightInfo returns the copyright information for a DownLoadable
Soundbank(.dls) file, or returns empty if the property is not found in the target file.

Tags: Music, MIDI, SoundFont, SoundBank
*/
function getDLSCopyRightInfo pRIFFfile
   if there is not a file pRIFFfile then
return "ERROR not a valid file path"
exit getDLSCopyRightInfo
   end if
   open file pRIFFfile for binary read
   read from file pRIFFfile for 4 bytes
   put it into tRIFFType -- Should be 'RIFF'
   if tRIFFType <> "RIFF" then
put "ERROR file is not RIFF! SIG= " & tRIFFType & " : " & tRIFFformType & cr after tDump
close file pRIFFfile
return tDump
exit getDLSCopyRightInfo
   end if
   read from file pRIFFfile for 4 bytes
   get binaryDecode("I",it,tRIFFLength)
   read from file pRIFFfile for 4 bytes
   put it into tRIFFformType-- Should be 'DLS '
   if tRIFFformType <> "DLS " then
put "ERROR file is not a DLS file! SIG= " & tRIFFType & " : " & tRIFFformType & cr after tDump
close file pRIFFfile
return tDump
exit getDLSCopyRightInfo
   end if
   put "FILE IS RIFF DLS, Sig4CC = " & tRIFFType & " : " & tRIFFformType &  cr after tDump
   put "" into tCopyRightsList
   repeat
read from file pRIFFfile until "ICOP"
if it is empty then exit repeat
--read from file pRIFFfile for 4 bytes
--put it into tChunkType
-- put "Copyright info found" & cr after tDump
read from file pRIFFfile for 4 bytes
if it is empty then
   exit repeat
else
   get binaryDecode("I",it,tLength)
   -- put "Length: " & tLength & cr after tDump
   if tLength = 0 then exit repeat
   read from file pRIFFfile for tLength bytes
   put it into tCopyrightInfo
   if tCopyrightInfo <> tPrevCopyrightInfo and tCopyrightInfo <> (the last line of tCopyRightsList) then
put tCopyrightInfo & cr after tCopyRightsList
put tCopyrightInfo into tPrevCopyrightInfo
   else
put tCopyrightInfo into tPrevCopyrightInfo
   end if
end if
   end repeat
   filter lines of tCopyRightsList without empty
   sort tCopyRightsList
   put line 1 of tCopyRightsList into tNewList
   repeat with tCounter = 2 to the number of lines in tCopyRightsList
if tNewList contains ( line tCounter of tCopyRightsList ) then
   next repeat
else
   put line tCounter of tCopyRightsList & cr after tNewList
   next repeat
end if
   end repeat
   close file pRIFFfile
   if there is a fld Dump then put tDump after fld Dump
   if tCopyRightsList is not empty then
return tCopyRightsList
   elseå
return empty -- with "No ICOP chunks found"
   end if
end getDLSCopyRightInfo


/**
Name: getDLSEngineersInfo

Type: function

Syntax: getDLSEngineersInfo( pDLSFilePath )

Introduced: 1.0

OS: mac,win,linux,ios,android

Platforms: desktop,mobile

Summary: getDLSEngineersInfo returns the names of the Sound Engineers
responsible for creating the DownLoadable Soundbank(.dls) file.

Parameters:

pSF2FilePath: A file path that points to DownLoadable Soundbank(.dls) file

Returns: A list of Sound Engineers responsible for creating the Soundbank file

Example:
put getDLSEngineersInfo("/Path/To/ASoundBank.dls") into tSoundEngineering

Description:
getDLSEngineersInfo returns the names of the Sound Engineers
responsible for creating a SoundFont (sf2) or DownLoadable Soundbank(.dls) file,
or returns empty property is not set for the target file.

Tags: Music, MIDI, SoundFont, SoundBank
*/
function getDLSEngineersInfo pRIFFfile
   if there is not a file pRIFFfile then
return "ERROR not a valid file path"
exit getDLSEngineersInfo
   end if
   open file pRIFFfile for binary read
   read from file pRIFFfile for 4 bytes
   put it into tRIFFType -- Should be 'RIFF'
   if tRIFFType <> "RIFF" then
put "ERROR file is not RIFF! SIG= " & tRIFFType & " : " & tRIFFformType & cr after tDump
close file pRIFFfile
return tDump
exit getDLSEngineersInfo
   end if
   read from file pRIFFfile for 4 bytes
   get binaryDecode("I",it,tRIFFLength)
   read from file pRIFFfile for 4 bytes
   put it into tRIFFformType-- Should be 'DLS '
   if tRIFFformType <> "DLS " then
put "ERROR file is not a DLS file! SIG= " & tRIFFType & " : " & tRIFFformType & cr after tDump
close file pRIFFfile
return tDump
exit getDLSEngineersInfo
   end if
   put "FILE IS RIFF DLS, Sig4CC = " & tRIFFType & " : " & tRIFFformType &  cr after tDump

   repeat
read from file pRIFFfile until "IENG"
if it is empty then exit repeat
--read from file pRIFFfile for 4 bytes
--put it into tChunkType
-- put "Copyright info found" & cr after tDump
put 0 into tLength
read from file pRIFFfile for 4 bytes
get binaryDecode("I",it,tLength)

-- put "Length: " & tLength & cr after tDump
read from file pRIFFfile for tLength bytes
put it into tEngineerInfo
if tEngineerInfo <> tPrevEngineerInfo and tEngineerInfo <> (the last line of tEngineersList) then
   put tEngineerInfo & cr after tEngineersList
   put tEngineerInfo into tPrevEngineerInfo
else
   put tEngineerInfo into tPrevEngineerInfo
end if
   end repeat
   filter lines of tEngineersList without empty
   sort tEngineersList
   put line 1 of tEngineersList into tNewList
   repeat with tCounter = 2 to the number of lines in tEngineersList
if ( line tCounter of tEngineersList ) is in tNewList then
   next repeat
else
   put line tCounter of tEngineersList & cr after tNewList
   next repeat
end if
   end repeat
   close file pRIFFfile
   if there is a fld Dump then put tDump after fld Dump
   return tNewList
end getDLSEngineersInfo


/**

Name: getDLSInstruments

Type: function

Syntax: getDLSInstruments( pDLSFilePath )

Introduced: 1.0

OS: mac,win,linux,ios,android

Platforms: desktop,mobile

Parameters:

pDLSFilePath: A file path that points to a DownLoadableSoundbank(.dls) file

Returns: A list of Sound Patches that are in the SoundFont file.

Example:
put getDLSInstruments("/System/Library/Components/CoreAudio.component/Contents/Resources/gs_instruments.dls") into btn "Select Sound Patch >"

Summary: Get a line delimited list of sound patches from a DownLoadableSoundbank(.dls) file.

Description:
getDLSInstruments returns a line delimited list of sound patches from a
DownLoadableSoundbank(.dls) file. Each list line is in the format:
banknumber-patchnumber patchname, and so for a general midi soundbank
the first line would be "0-1 Piano 1"

Tags: Music, MIDI, SoundFont, SoundBank
*/
function getDLSInstruments tRIFFfile
   put tRIFFfile
   set cursor to busy
   lock screen
   open file tRIFFfile for binary read
   read from file tRIFFfile until "colh" -- collection header
   put "Collection Header Found : " &  byte -4 to -1 of it & cr after tDump
   read from file tRIFFfile for 4 bytes
   get binaryDecode("I",it,tChunkLength)
   put "Chunk Length=" & tChunkLength & cr after tDump
   read from file tRIFFfile for 4 bytes
   get binaryDecode("I",it,tColCnt)
   put "Instruments in collection: " & tColCnt & cr after tDump
   --   if tChunkLength > 4 then
   --read from file tRIFFfile for tChunkLength - 4 bytes
   --put "Extra Data= " & it & cr after tDump
   --   end if
   read from file tRIFFfile for 4 bytes
   put it into tChunkType
   put "Chunk Type 4CC = " & tChunkType & cr after tDump
   if tChunkType = "LIST" then
read from file tRIFFfile for 4 bytes
get binaryDecode("I",it,t4bytes)
put "List Chunk Size: " & t4bytes & cr after tDump
read from file tRIFFfile for 4 bytes
put "List type: " & it & cr after tDump
   end if
   lock screen
   put empty into tSoundBanksPrograms
   -- put empty
   repeat tColCnt
set cursor to busy
-- put tColCnt
read from file tRIFFfile until "ins "
put "Instrument Found: " & byte -4 to -1 of it & cr after tDump
read from file tRIFFfile until "insh"
put "Instrument Header Found: " & byte -4 to -1 of it & cr after tDump
read from file tRIFFfile for 4 bytes
get binaryDecode("I",it,tSize)
put "Chunk Size = " & tSize & cr after tDump
read from file tRIFFfile for 4 bytes
get binaryDecode("I",it,tRegions)
put "Regions = " & tRegions & cr after tDump
read from file tRIFFfile for 4 bytes
get binaryDecode("CCxb8",it,tBankCC0_MSB,tBankCC32_LSB,tSkippedByte,tIsDrumBank)
-- get binaryDecode("CCxC",it,tBankCC0_MSB,tBankCC32_LSB,tSkippedByte,tIsDrumBank)
if the last char of tIsDrumBank is "1" then
   put 128 into tBankCC32_LSB
   put empty into tIsDrumBank
else
   put empty into tIsDrumBank
end if
-- if tIsDrumBank = "128"
-- put "Bank = " & tBankCC0_LSB && tBankCC32_MSB && cr after tDump
read from file tRIFFfile for 4 bytes
get binaryDecode("I",it,tInstrumentNum)
-- put "Instrument Number = " & tInstrumentNum & cr after tDump
read from file tRIFFfile until "INAM"
put "Instrument Name Found: " & byte -4 to -1 of it & cr after tDump
read from file tRIFFfile for 4 bytes
get binaryDecode("I",it,tSize)
put "Chunk Size = " & tSize & cr after tDump
read from file tRIFFfile for tSize bytes
put it into tPresetName
put "Instrument Name = " & tPresetName & cr after tDump
put tBankCC0_MSB &"(MSB) "& tBankCC32_LSB &" " & tIsDrumBank & tInstrumentNum && tPresetName & cr after tSoundBanksPrograms -- MSB and LSB Messages (controllers 0 and 32, respectively)
   end repeat
   close file tRIFFfile
   repeat with x = 1 to the number of lines in tSoundBanksPrograms
set cursor to busy
if word 1 of line x of tSoundBanksPrograms = "0(MSB)" then
   delete word 1 of line x of tSoundBanksPrograms
end if
if word 1 of line x of tSoundBanksPrograms = "0(LSB)" then
   delete word 1 of line x of tSoundBanksPrograms
end if
   end repeat
   filter lines of tSoundBanksPrograms without empty
   sort lines of tSoundBanksPrograms numeric by word 4 of each
   sort lines of tSoundBanksPrograms numeric by word 3 of each
   sort lines of tSoundBanksPrograms numeric by word 2 of each
   sort lines of tSoundBanksPrograms numeric by word 1 of each
   repeat with x = 1 to the number of lines in tSoundBanksPrograms
set cursor to busy
if word 1 of line x of tSoundBanksPrograms is an integer and word 2 of line x of tSoundBanksPrograms is an integer then
   put word 1 of line x of tSoundBanksPrograms &"-" & word 2 of line x of tSoundBanksPrograms into word 1 to 2 of line x of tSoundBanksPrograms
end if
   end repeat
   if there is a fld "Dump" then put tDump into fld "Dump"
   return tSoundBanksPrograms
end getDLSInstruments


/**
Name: getSF2Instruments

Type: function

Syntax: getSF2Instruments( pSF2FilePath )

Introduced: 1.0

OS: mac,win,linux,ios,android

Platforms: desktop,mobile

Summary: getSF2Instruments returns a line delimited list of sound patches from a SoundFont(.sf2) file.

Parameters:

pSF2FilePath: A file path that points to a SoundFont2 (.SF2) file

Returns: A list of Sound Patches that are in the SoundFont file.

Example:
put getSF2Instruments("/Path/To/ASoundFont.sf2") into btn "Select Sound Patch >"

Description:
getSF2Instruments returns a line delimited list of sound patches from a SoundFont(.sf2) file.
The each list line is in the format: banknumber-patchnumber patchname,
so for a general midi soundbank the first line would be "0-1 Piano 1"

Tags: Music, MIDI, SoundFont, SoundBank
*/
function getSF2Instruments tRIFFfile
   if there is not a file tRIFFfile then
      return "ERROR: Invalid file path"
      exit getSF2Instruments
   end if
   lock screen
   open file tRIFFfile for binary read
   read from file tRIFFfile for 4 bytes
   --  if it <> "RIFF" then
   --put "ERROR File is not RIFF, SIG= " & it & cr after tDump
   --   else
   --put "FILE IS RIFF, Sig4CC = " & it & cr after tDump
   --   end if
   read from file tRIFFfile for 4 bytes
   get binaryDecode("I",it,tRIFFLength)
   -- put "RIFF Byte Length=" & tLength & cr after tDump
   read from file tRIFFfile for 4 bytes

   if it <> "sfbk" then
      put "ERROR File is not a SoundFont File, FormType 4CC = " & it & cr into tDump
   else
      put "FILE IS SoundFont, Sig4CC = " & it & cr into tDump
   end if

   read from file tRIFFfile for 4 bytes
   put it into tChunkType
   put "LIST 4CC = " & tLISTType & cr after tDump
   read from file tRIFFfile for 4 bytes
   get binaryDecode("I",it,tLISTLength)
   put "LIST Length=" & tLISTLength & cr after tDump
   read from file tRIFFfile for 4 bytes
   put it into tChunkType
   put "LIST Type 4CC = " & tChunkType & cr after tDump
   if tChunkType <> "phdr" then
      read from file tRIFFfile until "LIST"
      read from file tRIFFfile for 4 bytes
      get binaryDecode("I",it,tLISTLength)
      put "LIST Length=" & tLISTLength & cr after tDump
      read from file tRIFFfile for 4 bytes
      put it into tChunkType
      put "LIST Type 4CC = " & tChunkType & cr after tDump
      if tChunkType <> "phdr" then
         read from file tRIFFfile until "LIST"
         read from file tRIFFfile for 4 bytes
         get binaryDecode("I",it,tLISTLength)
         put "LIST Length=" & tLISTLength & cr after tDump
         read from file tRIFFfile for 4 bytes
         put it into tChunkType
         put "LIST Type 4CC = " & tChunkType & cr after tDump
      end if

   end if

   put empty into tSoundPresets

   read from file tRIFFfile for 4 bytes
   if it = "phdr" then
      put "phdr: " & it & cr after tDump

      read from file tRIFFfile for 4 bytes
      get binaryDecode("I",it,t4bytes)
      put "length = " & t4bytes & cr after tDump

      repeat 500
         read from file tRIFFfile for 20 bytes
         put it into tSoundPresetName
         if tSoundPresetName contains "EOP" then
            exit repeat
         else
            put empty into tTemp
            put "0123456789abcdefghijklmnopqrstuvwxyz" into tAlpha
            repeat for each char tChar in tSoundPresetName
               if tchar is in tAlpha then put tchar after tTemp
            end repeat
            put tTemp into tSoundPresetName
         end if
         Put word 1 of tTemp && word 2 of tTemp && word 3 of tTemp && word 4 of tTemp into tSoundPresetName
         read from file tRIFFfile for 2 bytes
         get binaryDecode("S",it,tInstrumentNum)
         read from file tRIFFfile for 2 bytes
         get binaryDecode("CC",it,tBankCC32_LSB,tBankCC0_MSB)
         if tBankCC32_MSB = 128 then
            put "DrumBank " into tIsDrumBank
         else
            put empty into tIsDrumBank
         end if
         put  tBankCC0_MSB &"(MSB) "& tBankCC32_LSB &" " & tIsDrumBank & tInstrumentNum && tSoundPresetName & cr after tSoundPresets
         read from file tRIFFfile for 14 bytes -- skips rest of record
      end repeat
   end if
   close file tRIFFfile
   --filter each word in tSoundPresets not matching "0(MSB)" into tSoundPresets
   repeat with x = 1 to the number of lines in tSoundPresets
      if word 1 of line x of tSoundPresets = "0(MSB)" then
         delete word 1 of line x of tSoundPresets
      end if
      if word 1 of line x of tSoundPresets = "0(LSB)" then
         delete word 1 of line x of tSoundPresets
      end if
   end repeat
   filter lines of tSoundPresets without empty
   sort lines of tSoundPresets numeric by word 4 of each
   sort lines of tSoundPresets numeric by word 3 of each
   sort lines of tSoundPresets numeric by word 2 of each
   sort lines of tSoundPresets numeric by word 1 of each
   repeat with x = 1 to the number of lines in tSoundPresets
      if word 1 of line x of tSoundPresets is an integer and word 2 of line x of tSoundPresets is an integer then
         put word 1 of line x of tSoundPresets &"-" & word 2 of line x of tSoundPresets into word 1 to 2 of line x of tSoundPresets
      end if
   end repeat
   if there is a fld "Dump" then put tDump into fld "Dump"
   unlock screen
   return tSoundPresets
end getSF2Instruments
