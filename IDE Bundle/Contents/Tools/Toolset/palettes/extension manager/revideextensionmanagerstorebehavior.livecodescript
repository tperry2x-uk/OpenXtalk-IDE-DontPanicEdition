script "revIDEExtensionManagerStoreBehavior"
on preOpenCard
   send "resizeStack" to me
   browserHide
   setStatus "Loading..."
   set the repeatcount of image "loading" of me to -1
end preOpenCard

constant kLoadTimeout = 10
on openCard
   --   hiliteFrameItem "repo"
   --   if the url of widget "browser" of me is empty then
   --      set the userAgent of widget "browser" of card "web" of me to "OpenXTalk IDE" -- was "LiveCode"
   --            browserGoToExtensionStore
   --   else
   nudgeBrowser
   --   end if
end openCard

on nudgeBrowser
   -- Hack to get round bug 18946
   send "browserNavigateComplete" to me in kLoadTimeout seconds
end nudgeBrowser

on setStatus pStatus
   put pStatus into field "status" of me
end setStatus

on resizeStack
   lock screen
   local tContentRect, tPadding
   put the contentrect of me into tContentRect
   put the palettePadding of me into tPadding
   set the width of field "status" of me to the width of me
   set the loc of field "status" of me to the loc of me
   set the loc of image "loading" of me to the loc of me
   set the bottom of image "loading" of me to the top of field "status" of me - tPadding
   
   set the rect of graphic "browser_background" of me to tContentRect
   set the rect of widget "browser" of me to tContentRect
   
   unlock screen
   pass resizeStack
end resizeStack

on browserHide
   hide widget "browser" of me
end browserHide

on browserShow
   show widget "browser" of me
end browserShow

on browserSetURL pURL
   lock screen
   set the url of widget "browser" of card "web" of me to pURL
   nudgeBrowser
   unlock screen
end browserSetURL

on browserGoToExtensionPage pExtensionTypeID
   hiliteFrameItem "repo"
   lock screen
   browserSetURL "https://openxtalk-org.github.io/OpenXTalk-Playground/Widgets/index.html"
   -- browserSetURL revIDEWebPageURL("extensions") & pExtensionTypeID & slash
   go card "web" of this stack
   unlock screen
end browserGoToExtensionPage

on browserGoToExtensionStore
   hiliteFrameItem "repo"
   -- if the url of widget "browser" of me is empty then
   --      set the userAgent of widget "browser" of card "web" of me to "OpenXTalk IDE" -- was "LiveCode"
   --            browserGoToExtensionStore
   --   else
   lock screen
   browserSetURL "https://openxtalk-org.github.io/OpenXTalk-Playground/Widgets/index.html"
   -- browserSetURL revIDEWebPageURL("extensions")
   go card "web" of this stack
   unlock screen
end browserGoToExtensionStore

on browserDocumentLoadBegin pUrl,pError
   put "browserDocumentLoadBegin " & pUrl, pError & cr after msg
end browserDocumentLoadBegin

on browserDocumentLoadComplete pURL
   put "browserDocumentLoadComplete "& pURL & cr after msg
   browserShow
   set the javaScriptHandlers of widget "browser" of me to "installExtension"
end browserDocumentLoadComplete

on browserDocumentLoadFailed pURL
   put "browserDocumentLoadFailed " & pURL & cr after msg
   -- browserGoToExtensionStore
end browserDocumentLoadFailed

on browserNavigateBegin pUrl
   put "browserNavigateBegin "& pURL & cr after msg
end browserNavigateBegin

on browserNavigateComplete pUrl
   put "browserNavigateComplete "& pURL & cr after msg
   set the javaScriptHandlers of widget "browser" of me to "installExtension"
   browserShow
end browserNavigateComplete

on browserNavigateFailed pUrl, pError
   put "browserNavigateFailed " & pUrl, pError & cr after msg
end browserNavigateFailed

on browserUnhandledLoadRequest pUrl, pError
   put "browserUnhandledLoadRequest " & pUrl, pError & cr after msg
end browserUnhandledLoadRequest

on browserProgressChanged pUrl, pProgress
   -- put "browserProgressChanged " & pUrl, pProgress & cr after msg
end browserProgressChanged

--browserFrameDocumentLoadBegin	Sent when a document begins loading in a frame of the browser.	browserFrameDocumentLoadBegin pUrl
--browserFrameDocumentLoadComplete	Sent when a document has completed loading in a frame of the browser.	browserFrameDocumentLoadComplete pUrl
--browserFrameDocumentLoadFailed	Sent when a document has failed to load in a frame of the browser.	browserFrameDocumentLoadFailed pUrl, pError
