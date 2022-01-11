# Builder Metadata & Inline Doc Markup List

Description:
Template Widget

Name: mouseMove
Type: message

Name: keyDown
Type: message

Name: mouseDown
Type: message

Name: mouseUp
Type: message

Name: mouseRelease
Type: message

Name: backgroundColor
Type: property

Name: hiliteColor
Type: property

Name: borderWidth
Type: property

Name: borderColor
Type: property

--

metadata author is "Author"
metadata version is "0.0.1"
metadata title is "NewWidget"
metadata userVisible is "true" -- Show Widget in ... ?
metadata _ide is "true" -- ? default load at startup
metadata preferredSize is "800,200"
metadata svgicon is "M66.43,52.07c-0.71,0.32-1.48,0... "


property myProp   get mMyProp   set setMyProp
metadata myProp.editor  is "com.livecode.pi.text" -- there's a bunch of different editors available
metadata myProp.default is "Some Default Text" -- default value for the property, as a string usualy
metadata myProp.section is "Basic" -- Basic, Custom, Colors, Position, Text, Advanced, Geometry Manager
metadata myProp.label   is "My Custom Property"
metadata myProp.user_visible is "true" -- false hides the property from the property inspector

metadata myProp.editor is "com.livecode.pi.enum"
metadata myProp.options is "foo,one,two,..."

handler onDo()
end handler

handler OnMouseDown()
end handler
handler OnMouseUp()
end handler
handler OnMouseStillDown()
end handler
handler OnMouseEnter()
end handler
handler OnMouseLeave()
end handler
handler OnPaint()
end handler
handler OnCreate()
end handler

-------------------------------------------------------   MESSAGES SENT TO EXTENSION BUILDERS VM  -------------------------------------------------------

OnActionKeyPress keyText
OnAttach
OnClose
OnCreate
OnDestroy
OnDetach
OnDoubleClick

OnFocusEnter
OnFocusLeave


OnOpen
OnLoad

OnPaint
OnLayerChanged
OnVisibilityChanged isVisible
OnGeometryChanged

OnSave
OnStartEditing	message	OnStartEditing
OnStopEditing	message	OnStopEditing
OnParentPropertyChanged	message	OnParentPropertyChanged
OnTimer
OnDo TheScriptToDo -- used in browser widget to run JavaSCript Snippets -- from script allows use: do "thing to do" in Widget

---------------------------------------------------- User Input-----------------------------------------------------------------------
OnKeyPress keyText
OnModifiersChanged

OnClick

OnMouseScroll pScrollInfo

OnMouseDown
OnMouseUp
OnMouseMove
OnMouseEnter
OnMouseLeave
OnMouseCancel
OnMouseHover
OnMouseStillHover
OnMouseCancelHover

OnDragDrop
OnDragEnter
OnDragFinish
OnDragLeave
OnDragMove
OnDragStart

OnTouchCancel
OnTouchFinish
OnTouchMove
OnTouchStart
