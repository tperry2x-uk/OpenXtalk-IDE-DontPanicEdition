script "revIDEExtensionManagerBehavior" with behavior "revPaletteBehavior"
on preOpenStack
   lock screen
   dispatch "setAsBehavior" to revIDEFrameBehavior() with the long id of this me
   
   set the behavior of card "web" of me to the long id of stack "revIDEExtensionManagerStoreBehavior"
   set the behavior of card "list" of me to the long id of stack "revIDEExtensionManagerListBehavior"
   set the zoomBox of this stack to false
   
   clearFrameData
   
   # Navigation
   -- addFrameItem pName, pLocation, pItemType, pLabel, pIcon, pIconSelected, pCallbackMessage, pCallbackTarget, pParameter
   addFrameItem "widget","header", "navigation", "Widgets", "", "","showList", the long id of me,"widget"
   addFrameItem "library","header", "navigation", "Libraries", "", "","showList", the long id of me,"library"
   -- addFrameItem "sample","header", "navigation", "Sample Stacks", "", "","showList", the long id of me,"sample"
   -- addFrameItem "snippet","header", "navigation", "Snippets", "", "","showList", the long id of me,"snippet"
   addFrameItem "repo","header", "navigation", "Repo", "", "","showExtensionStore", the long id of card "web" of me,"repo"
   addFrameItem "playground","header", "navigation", "Playground", "", "","showWebPlaygound", the long id of card "web" of me,"playground"
   addFrameItem "install", "header", "action", "Install extension", "plus", "","installNew", the long id of me
   
   set the hilitedTabColor of me to "255,255,255"
   set the navigationDisplayStyle of me to "names"
   unlock screen
end preOpenStack

on showList pSection
   lock screen
   send "showList pSection" to card "list" of this stack
   unlock screen
end showList

command refreshList
   lock screen
   send "refreshList" to card "list" of this stack
   unlock screen
end refreshList

on showExtensionStore
   hiliteFrameItem "repo"
   lock screen
   set the userAgent of widget "browser" of card "web" of this stack to "OpenXTalk IDE" -- "LiveCode"
   set the URL of widget "Browser" of card "web" of this stack to "https://openxtalk-org.github.io/OpenXTalk-Playground/Widgets/index.html" --  "https://openxtalk-org.github.io/OpenXTalk-Playground/"
   go to card "web" of this stack
   unlock screen
end showExtensionStore

on showWebPlaygound
   hiliteFrameItem "playground"
   lock screen
   set the userAgent of widget "browser" of card "web" of this stack to "OpenXTalk IDE"
   go to card "web" of this stack
   set the URL of widget "Browser" of card "web" of this stack to "https://openxtalk-org.github.io/OpenXTalk-Playground/"
   unlock screen
end showWebPlaygound

on preferenceChanged pPreference, pValue
   revIDESetPreference pPreference, pValue
end preferenceChanged

on installNew
   answer file "Choose an extension to install:" with type "Extension Builder|lce"
   if it is not empty then
      installExtension it, "", "widget"
   end if
end installNew

on installExtension pExtensionURL, pTypeID, pType
   lock screen
   showList pType
   if pExtensionURL begins with "http" then
      // get from extensions store
      unlock screen
      put cr& "insalling Remote Extension URL="& pExtensionURL & ", TypeID="& pTypeID & ", Type=" & pType after msg -- for checking
      lock screen
      revIDEExtensionDownloadAndInstall pExtensionURL, pType
   else if pExtensionURL begins with "data:" then -- data:text/plain;base64,SGVsbG8gV29ybGQh
      -- do Base64 Encoded File Conversion"
   else
      // get from local .lce file
      revIDEExtensionInstall pExtensionURL, pType
   end if
   unlock screen
end installExtension


--on actionSelected pItemName
--   put "actionSelected " & pItemName
--   pass actionSelected
--end actionSelected

--on menuPick pPick
--   put "menuPick " & pPick
--end menuPick

--on navChanged
--end navChanged

on navSelected pItemName
   -- put "navSelected " & pItemName & cr
   if pItemName is "Repo" then
      put pItemName
      send "showExtensionStore" to this stack in 50 millisecs
      exit navSelected
   end if
   if pItemName is "Playground" then
      put pItemName
      send "showWebPlaygound" to this stack in 50 millisecs
      exit navSelected
   end if
   pass navSelected
end navSelected

