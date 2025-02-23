﻿script "revIDEProjectBrowserControlRowBehavior"
on FillInData pDataA, pRow
   # Map pDataA values to physical controls...

   if pDataA is empty then exit FillInData

   set the cIndent of me to pDataA["level"] -1
   set the cObjectLongID of me to pDataA["long id"]
   set the cBehaviorLongID of me to pDataA["behavior"]
   set the cLevelConnectors of me to pDataA["levels"]

   put pDataA["type"] & ":" into field "type" of me
   put toUpper(char 1 of field "type" of me) into char 1 of field "type" of me
   put pDataA["name"] into field "name" of me
   set the tooltip of field "name" of me to pDataA["long id"]

   if there is an  image (pDataA["type"] & ".png") of card "templates" of this stack then
      set the icon of button "controlIcon" of me to the id of image (pDataA["type"] & ".png") of card "templates" of this stack
   else
      set the icon of button "controlIcon" of me to the id of image ("button.png") of card "templates" of this stack
   end if

   -- set the backgroundColor of graphic "background" of me to empty

   if pDataA["scriptlines"] is 0 or pDataA["scriptlines"] is empty then
      put 0 into field "scriptLines" of me
   else
      put pDataA["scriptlines"] into field "scriptLines" of me
   end if

   -- Behaviors
   if pDataA["behavior"] is empty then
      repeat with i = 1 to 10
         hide grc ("behaviorScriptLines" & i) of me
      end repeat
   else

      # check parent behaviors
      local tTargetBehavior
      local tBehaviorList
      local tMissingBehaviorList
      local tSkipRepeat

      put pDataA["behavior"] into tTargetBehavior

      if tTargetBehavior <> empty then
         if exists(tTargetBehavior) then
            put tTargetBehavior & cr into tBehaviorList
            put false into tSkipRepeat
         else
            put tTargetBehavior & cr into tBehaviorList
            put tTargetBehavior & cr after tMissingBehaviorList
            put true into tSkipRepeat
         end if
      end if

      if not tSkipRepeat then
         repeat
            put the behavior of tTargetBehavior into tTargetBehavior
            if tTargetBehavior = empty then exit repeat

            if not (exists(tTargetBehavior)) then
               put tTargetBehavior & cr after tBehaviorList
               put tTargetBehavior & cr after tMissingBehaviorList
               exit repeat
            else
               put tTargetBehavior & cr after tBehaviorList
            end if
         end repeat
      end if
      delete char - 1 of tBehaviorList -- return
      delete char -1 of tMissingBehaviorList -- return

      local tNoOfLInes
      local tCounter
      local tCPName

      put min(the number of lines of tBehaviorList, 10) into tNoOfLines
      repeat with i = 1 to tNoOfLines
         set the toolTip of grc ("behaviorScriptLines" & i) of me to line i of tBehaviorList
         if line i of tBehaviorList is among the lines of tMissingBehaviorList then
            set the toolTip of grc ("behaviorScriptLines" & i) of me to ("Missing: " & line i of tBehaviorList)
         end if
         show grc ("behaviorScriptLines" & i) of me
         put ("cBehaviorLongID" & i) into tCPName
         set the tCPName of me to line i of tBehaviorList
         put i into tCounter
      end repeat
      repeat with j = tCounter + 1 to 10
         hide grc ("behaviorScriptLines" & j) of me
      end repeat
   end if

   if revIDEGetPreference("pb_indicator") is "text" then
      show field "type" of me
      hide button "controlIcon" of me
   else
      hide field "type" of me
      show button "controlIcon" of me
   end if

   __SetBoolProp "visible", pDataA["visible"]
   __SetBoolProp "cantSelect", pDataA["cantSelect"]
end FillInData

on LayoutControl pControlRect
   # Resize controls/row
   local tLevelConnectors, tConnectorCount, tLoc, tTextSize

   put the effective textSize of me into tTextSize

   put item 1 of the loc of me & comma & item 2 of the loc me -1 into tLoc
   put the cLevelConnectors of me into tLevelConnectors
   put the number of lines in the keys of tLevelConnectors into tConnectorCount

   set the rect of graphic "background" of me to pControlRect

   set the width of graphic "bottom_border" of me to (item 3 of pControlRect - item 1 of pControlRect)+2
   set the bottomLeft of graphic "bottom_border" of me to item 1 of pControlRect-1, item 4 of pControlRect

   ## Set the formatted height of all the fields
   set the fixedLineHeight of field "type" of me to false
   set the fixedLineHeight of field "name" of me to false
   set the height of field "type" of me to the formattedHeight of field "type" of me
   set the height of field "name" of me to the formattedHeight of field "name" of me

   set the fixedLineHeight of field "scriptLines" of me to true
   set the textSize of field "scriptLines" of me to empty
   if tTextSize <=12 then
      set the textHeight of field "scriptLines" of me to (tTextSize + (tTextSize/2))
   else
      set the textHeight of field "scriptLines" of me to (tTextSize + (tTextSize/3))
   end if
   set the height of field "scriptLines" of me to the viewProp["row height"] of the owner of the owner of the owner of me - 6

   repeat with i = 1 to 10
      set the textSize of grc ("behaviorScriptLines" & i) of me to empty
      set the height of grc ("behaviorScriptLines" & i) of me to the viewProp["row height"] of the owner of the owner of the owner of me - 6
      set the width of grc ("behaviorScriptLines" & i) of me to tTextSize + 2
   end repeat

   set the loc of field "type" of me to tLoc
   set the loc of field "name" of me to tLoc
   set the loc of button "controlIcon" of me to tLoc
   set the loc of button "cantSelect" of me to tLoc
   set the loc of button "visible" of me to tLoc
   set the loc of field "scriptLines" of me to tLoc

   repeat with i = 1 to 10
      set the loc of grc ("behaviorScriptLines" & i) of me to tLoc
   end repeat

   set the width of field "scriptLines" of me to the formattedWidth of field "scriptLines" of me
   set the width of field "name" of me to the formattedWidth of field "name" of me

   ## Set the vertical location of the name and text fields
   if tTextSize <= 14 then
      set the top of field "name" of me to the top of me + 2
   else
      set the top of field "name" of me to the top of me
   end if
   set the top of field "type" of me to the top of field "name" of me

   repeat with x = 1 to 10
      if x > tConnectorCount then
         hide group ("connector" & x) of me
      else
         show group ("connector" & x) of me
         connectorResize ("connector" & x)
         if tLevelConnectors[x] is not empty then
            setConnectorIcon the long id of group ("connector" & x) of me, tLevelConnectors[x]
            set the left of group ("connector" & x) of me to item 1 of pControlRect + (x-1)*20
         else
            setConnectorIcon the long id of group ("connector" & x) of me, empty
            set the left of group ("connector" & x) of me to item 1 of pControlRect + (x-1)*20
         end if
      end if
   end repeat

   local tNameFieldLeft
   if revIDEGetPreference("pb_indicator") is "text" then
      set the width of field "type" of me to the formattedWidth of field "type" of me
      set the left of field "type" of me to the right of group ("connector" & tConnectorCount) of me
      put the right of field "type" of me - 5 into tNameFieldLeft
   else
      set the left of button "controlIcon" of me to the right of group ("connector" & tConnectorCount) of me
      put the right of button "controlIcon" of me into tNameFieldLeft
   end if
   set the right of button "cantSelect" of me to the item 3 of pControlRect  - the palettePadding of me
   set the right of button "visible" of me to the left of button "cantSelect" of me  - the palettePadding of me
   set the right of field "scriptLines" of me to the left of button "visible" of me - the palettePadding of me
   set the right of grc "behaviorScriptLines1" of me to the left of field "scriptLines" of me - the palettePadding of me -2
   repeat with i = 2 to 10
      set the right of grc ("behaviorScriptLines" & i) of me to the left of grc ("behaviorScriptLines" & i - 1) of me - the palettePadding of me + 2
   end repeat

   ## Check the width of  the "name" field so it doesn't overrun the space
   local tNameWidth

   if the visible of grc "behaviorScriptLines1" of me then
      put the left of grc "behaviorScriptLines1" of me - tNameFieldLeft - the palettePadding of me into tNameWidth
      repeat with i = 10 down to 2
         if the visible of grc ("behaviorScriptLines" & i)  of me then
            put the left of grc  ("behaviorScriptLines" & i) of me - tNameFieldLeft - the palettePadding of me into tNameWidth
            exit repeat
         end if
      end repeat
   else
      put the left of field "scriptLines" of me - tNameFieldLeft - the palettePadding of me into tNameWidth
   end if

   if the width of field "name" of me > tNameWidth then
      set the width of field "name" of me to tNameWidth
   end if
   set the left of field "name" of me to tNameFieldLeft
end LayoutControl

getProp dvRowControl
   return the long id of me
end dvRowControl

setProp dvHilite[pHiliteColor] pBoolean
   local tCPName
   if pBoolean then
      set the foregroundColor of field "type" of me to revIDEColor("dataView_TextHiliteColor")
      set the foregroundColor of field "name" of me to  revIDEColor("dataView_TextHiliteColor")
      set the foregroundColor of field "scriptLines" of me to  revIDEColor("text_1")
      set the backgroundColor of field "scriptLines" of me to  revIDEColor("dataView_TextHiliteColor")
      repeat with i = 1 to 10
         set the foregroundColor of grc ("behaviorScriptLines" & i) of me to revIDEColor("text_1")
         put ("cBehaviorLongID" & i) into tCPName
         if exists(the tCPName of me) then
            set the backgroundColor of grc ("behaviorScriptLines" & i) of me to revIDEColor("dataView_TextHiliteColor")
         else
            set the backgroundColor of grc ("behaviorScriptLines" & i) of me to revIDEColor("dataView_scriptErrorBackgroundColor")
         end if
      end repeat
      set the colorOverlay["color"] of button "controlIcon" of me to revIDEColor("dataView_TextHiliteColor")
      set the foregroundColor of me to revIDEColor("dataView_disclosureIconHiliteColor")
   else
      set the foregroundColor of field "type" of me to revIDEColor("text_2")
      set the foregroundColor of field "name" of me to revIDEColor("text_1")
      set the foregroundColor of field "scriptLines" of me to  revIDEColor("text_3")
      repeat with i = 1 to 10
         set the foregroundColor of grc ("behaviorScriptLines" & i) of me to  revIDEColor("text_3")
         set the backgroundColor of grc ("behaviorScriptLines" & i) of me to  revIDEColor("dataView_hiliteColor")
      end repeat

      if exists(the cObjectLongID of me) and the scriptStatus of the cObjectLongID of me is "error" then
         set the backgroundColor of field "scriptLines" of me to revIDEColor("dataView_scriptErrorBackgroundColor")
      else
         set the backgroundColor of field "scriptLines" of me to revIDEColor("dataView_hiliteColor")
      end if

      repeat with i = 1 to 10
         put ("cBehaviorLongID" & i) into tCPName
         if exists(the tCPName of me) and the scriptStatus of the tCPName of me is "error" then
            set the backgroundColor of grc ("behaviorScriptLines" & i) of me to revIDEColor("dataView_scriptErrorBackgroundColor")
         else if not (exists(the tCPName of me)) then --##
            set the backgroundColor of grc ("behaviorScriptLines" & i) of me to revIDEColor("dataView_scriptErrorBackgroundColor")
         else if not (exists(the tCPName of me)) then
            set the backgroundColor of grc ("behaviorScriptLines" & i) of me to revIDEColor("dataView_scriptErrorBackgroundColor")
         else
            set the backgroundColor of grc ("behaviorScriptLines" & i) of me to revIDEColor("dataView_hiliteColor")
         end if
      end repeat

      set the colorOverlay of button "controlIcon" of me to empty
      set the foregroundColor of me to revIDEColor("dataView_disclosureIconColor")
   end if
end dvHilite

on  mouseUp
   switch the short name of the target
      case "scriptLines"
         edit the script of the cObjectLongID of me
         break
      case "behaviorScriptLines1"
         checkExistence (the cBehaviorLongID1 of me), 1
         edit the script of the cBehaviorLongID1 of me
         break
      case "behaviorScriptLines2"
         checkExistence (the cBehaviorLongID2 of me), 2
         edit the script of the cBehaviorLongID2 of me
         break
      case "behaviorScriptLines3"
         checkExistence (the cBehaviorLongID3 of me), 3
         edit the script of the cBehaviorLongID3 of me
         break
      case "behaviorScriptLines4"
         checkExistence (the cBehaviorLongID4 of me), 4
         edit the script of the cBehaviorLongID4 of me
         break
      case "behaviorScriptLines5"
         checkExistence (the cBehaviorLongID5 of me), 5
         edit the script of the cBehaviorLongID5 of me
         break
      case "behaviorScriptLines6"
         checkExistence (the cBehaviorLongID6 of me), 6
         edit the script of the cBehaviorLongID6 of me
         break
      case "behaviorScriptLines7"
         checkExistence (the cBehaviorLongID7 of me), 7
         edit the script of the cBehaviorLongID7 of me
         break
      case "behaviorScriptLines8"
         checkExistence (the cBehaviorLongID8 of me), 8
         edit the script of the cBehaviorLongID8 of me
         break
      case "behaviorScriptLines9"
         checkExistence (the cBehaviorLongID9 of me), 9
         edit the script of the cBehaviorLongID9 of me
         break
      case "behaviorScriptLines10"
         checkExistence (the cBehaviorLongID10 of me), 10
         edit the script of the cBehaviorLongID10 of me
         break
      case "icon"
      case "disclosure"
         if the cState of the owner of the target is "contracted" then
            toggleGroup the cRowNumber of the owner of the owner of the target,true
         else if the cState of the owner of the target is"expanded" then
            toggleGroup  the cRowNumber of  the owner of the owner of the target,false
         end if
         break
      default
         pass mouseUp
   end switch
end mouseUp

command checkExistence pLongID, pOrdinal
   local tGraphic
   if exists(pLongID) then
      return empty
   else
      put ("behaviorScriptLines" & pOrdinal) into tGraphic
      answer the toolTip of grc tGraphic of me
      exit to top
   end if
end checkExistence

on mouseDown pButton
   if pButton is 3 then
      dispatch "pbRightClick" to stack "revIDEProjectBrowser" with the cObjectLongID of me
   else if the short name of the target is "name" and \
         the dvRow of me is the dvHilitedRow of the owner of me then
      set the textColor of field "name" of me to revIDEColor("text_1")
      CreateFieldEditorForField the long id of field "name" of me, "name"
   else
      pass mouseDown
   end if
end mouseDown

on mouseDoubleUp
   goToObject the cObjectLongID of me
end mouseDoubleUp

on CloseFieldEditor pFieldEditor, pRow, pKey, pClosingTriggeredBy
   # The text the user entered is different than the current value of the target field.
   set the textColor of field "name" of me to revIDEColor("text_3")
   set the text of field "name" of me to the text of pFieldEditor
   updateProperty the cObjectLongID of me, "name", the text of pFieldEditor
end CloseFieldEditor

on ExitFieldEditor pFieldEditor, pRow, pKey, pClosingTriggeredBy
   set the textColor of field "name" of me to revIDEColor("text_3")
   # The text the user entered is the same as the current value of the target field.
end ExitFieldEditor

on toggleVisible
   __SetBoolProp "visible", the icon of button "visible" of me is the id of image "visible_off" of card "templates" of this stack, true
end toggleVisible

on toggleCantSelect
   __SetBoolProp "cantSelect", the icon of button "cantSelect" of me is the id of image "cantSelect_off" of card "templates" of this stack, true
end toggleCantSelect

private command __SetBoolProp pProp, pValue, pUpdate
   if pValue then
      set the icon of button pProp of me to the id of image (pProp & "_on") of card "templates" of this stack
   else
      set the icon of button pProp of me to the id of image (pProp & "_off") of card "templates" of this stack
   end if
   set the tooltip of button pProp of me to "Set" && pProp && "to" && not pValue
   if pUpdate then
      updateProperty the cObjectLongID of me, pProp, pValue
   end if
end __SetBoolProp

getProp dvAcceptsDrop
   local theA, tRow, tDraggedRow, tDraggedType, tDraggedStyle
   local tDescendants, tLongID, tNextRow, tType

   put the dvRow of me into tRow
   put the cObjectLongID of me into tLongID
   put line 1 of the dragData["private"] into tDraggedRow
   put line 2 of the dragData["private"] into tDraggedStyle
   put line 3 of the dragData["private"] into tDraggedType

   if tRow is tDraggedRow then
      put true into theA["above"]
      put true into theA["below"]
   else if tDraggedStyle is "control" or tDraggedStyle is "group" then
      put true into theA["above"]
      put true into theA["below"]
   else if tDraggedType is "card" or tDraggedType is "substack" then
      put getNextVisibleRow(tRow) into tNextRow
      if tNextRow is 0 or tNextRow is empty then
         put false into theA["above"]
         put true into theA["below"]
      else
         put getRowType(tNextRow) into tType

         if tType is "card" or tType is "group" or tType is "stack" then
            put false into theA["above"]
            put true into theA["below"]
         else
            put false into theA["above"]
            put false into theA["below"]
         end if
      end if
   else
      put false into theA["above"]
      put false into theA["below"]
   end if
   return theA
end dvAcceptsDrop

command connectorResize pControl
   set the borderWidth of group pControl of me to 0
   set the showBorder of group pControl of me to false
   set the threeD of group pControl of me to false

   set the lockLoc of group pControl of me to true
   set the height of group pControl of me to the height of me
   set the width of group pControl of me to 20
   set the top of group pControl of me to the top of me

   local tTextSize, tWidgetSize
   put the effective textsize of me into tTextSize
   switch
      case tTextSize >= 8 and tTextSize < 12
         put 11 into tWidgetSize
         break
      case tTextSize >= 12 and tTextSize < 14
         put 13 into tWidgetSize
         break
      case tTextSize >= 14 and tTextSize < 18
         put 15 into tWidgetSize
         break
      case tTextSize >= 18
         put 17 into tWidgetSize
         break
      default
         put 13 into tWidgetSize
   end switch

   set the width of widget "icon" of group pControl of me to tWidgetSize
   set the height of widget "icon" of group pControl of me to the width of widget "icon" of group pControl of me
   set the loc of widget "icon" of group pControl  of me to the loc of group pControl of me
end connectorResize
