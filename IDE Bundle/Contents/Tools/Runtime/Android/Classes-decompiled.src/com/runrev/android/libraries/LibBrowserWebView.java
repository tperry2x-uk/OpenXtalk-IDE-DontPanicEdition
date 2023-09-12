/*     */ package com.runrev.android.libraries;
/*     */ 
/*     */ import android.app.Activity;
/*     */ import android.app.AlertDialog;
/*     */ import android.content.ActivityNotFoundException;
/*     */ import android.content.Context;
/*     */ import android.content.DialogInterface;
/*     */ import android.content.Intent;
/*     */ import android.graphics.Bitmap;
/*     */ import android.media.MediaPlayer;
/*     */ import android.util.Log;
/*     */ import android.view.MotionEvent;
/*     */ import android.view.View;
/*     */ import android.view.ViewGroup;
/*     */ import android.webkit.GeolocationPermissions;
/*     */ import android.webkit.JavascriptInterface;
/*     */ import android.webkit.WebChromeClient;
/*     */ import android.webkit.WebSettings;
/*     */ import android.webkit.WebView;
/*     */ import android.webkit.WebViewClient;
/*     */ import android.widget.FrameLayout;
/*     */ import android.widget.RelativeLayout;
/*     */ import android.widget.VideoView;
/*     */ import com.runrev.android.Engine;
/*     */ import com.runrev.android.nativecontrol.NativeControlModule;
/*     */ import java.lang.reflect.Method;
/*     */ import java.net.URISyntaxException;
/*     */ import java.security.SecureRandom;
/*     */ import java.util.Arrays;
/*     */ import java.util.List;
/*     */ import java.util.regex.Pattern;
/*     */ import org.json.JSONArray;
/*     */ import org.json.JSONException;
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ class LibBrowserWebView
/*     */   extends WebView
/*     */ {
/*     */   public static final String TAG = "revandroid.LibBrowserWebView";
/*     */   private VideoView m_custom_video_view;
/*     */   private FrameLayout m_custom_view_container;
/*     */   private WebChromeClient.CustomViewCallback m_custom_view_callback;
/*     */   private WebChromeClient m_chrome_client;
/* 169 */   private String m_js_handlers = "";
/* 170 */   private List<String> m_js_handler_list = null;
/*     */   private boolean m_allow_user_interaction = true;
/*     */   private static Method mWebView_getOverScrollMode;
/*     */   private static Method mWebView_setOverScrollMode;
/*     */   
/*     */   public LibBrowserWebView(Context paramContext) {
/* 176 */     super(paramContext);
/*     */     
/* 178 */     setWebViewClient(new WebViewClient()
/*     */         {
/*     */           public boolean shouldOverrideUrlLoading(WebView param1WebView, String param1String)
/*     */           {
/* 182 */             if (LibBrowserWebView.useExternalHandler(LibBrowserWebView.this.getContext(), param1String)) {
/* 183 */               return true;
/*     */             }
/* 185 */             LibBrowserWebView.this.setUrl(param1String);
/* 186 */             return true;
/*     */           }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */           
/*     */           public void onPageStarted(WebView param1WebView, String param1String, Bitmap param1Bitmap) {
/* 194 */             LibBrowserWebView.this.doStartedLoading(param1String);
/* 195 */             LibBrowserWebView.wakeEngineThread();
/*     */           }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */           
/*     */           public void onPageFinished(WebView param1WebView, String param1String) {
/* 203 */             if (LibBrowserWebView.this.m_js_handler_list != null) {
/* 204 */               LibBrowserWebView.this.addJSHandlers(LibBrowserWebView.this.m_js_handler_list);
/*     */             }
/*     */             
/* 207 */             LibBrowserWebView.this.doFinishedLoading(param1String);
/* 208 */             LibBrowserWebView.wakeEngineThread();
/*     */           }
/*     */ 
/*     */ 
/*     */           
/*     */           public void onReceivedError(WebView param1WebView, int param1Int, String param1String1, String param1String2) {
/* 214 */             if (param1Int == -10) {
/* 215 */               LibBrowserWebView.this.doUnsupportedScheme(param1String2);
/*     */             } else {
/* 217 */               LibBrowserWebView.this.doLoadingError(param1String2, param1String1);
/* 218 */             }  LibBrowserWebView.wakeEngineThread();
/*     */           }
/*     */         });
/*     */     
/* 222 */     setOnTouchListener(new View.OnTouchListener()
/*     */         {
/*     */           public boolean onTouch(View param1View, MotionEvent param1MotionEvent)
/*     */           {
/* 226 */             switch (param1MotionEvent.getAction()) {
/*     */               
/*     */               case 0:
/*     */               case 1:
/* 230 */                 if (!param1View.hasFocus())
/*     */                 {
/* 232 */                   param1View.requestFocus();
/*     */                 }
/*     */                 break;
/*     */             } 
/* 236 */             return !LibBrowserWebView.this.m_allow_user_interaction;
/*     */           }
/*     */         });
/*     */     
/* 240 */     this.m_chrome_client = new WebChromeClient()
/*     */       {
/*     */         public void onShowCustomView(View param1View, WebChromeClient.CustomViewCallback param1CustomViewCallback)
/*     */         {
/*     */           VideoView videoView;
/* 245 */           LibBrowserWebView.this.m_custom_view_container = new FrameLayout(LibBrowserWebView.this.getContext())
/*     */             {
/*     */               public boolean onTouchEvent(MotionEvent param2MotionEvent)
/*     */               {
/* 249 */                 return true;
/*     */               }
/*     */             };
/*     */           
/* 253 */           LibBrowserWebView.this.m_custom_view_container.setBackgroundColor(-16777216);
/*     */           
/* 255 */           if (param1View instanceof FrameLayout) {
/*     */             
/* 257 */             FrameLayout frameLayout = (FrameLayout)param1View;
/*     */             
/* 259 */             if (frameLayout.getFocusedChild() instanceof VideoView) {
/*     */               
/* 261 */               LibBrowserWebView.this.m_custom_video_view = (VideoView)frameLayout.getFocusedChild();
/*     */               
/* 263 */               frameLayout.removeView((View)LibBrowserWebView.this.m_custom_video_view);
/* 264 */               videoView = LibBrowserWebView.this.m_custom_video_view;
/*     */               
/* 266 */               LibBrowserWebView.this.m_custom_video_view.setOnCompletionListener(new MediaPlayer.OnCompletionListener()
/*     */                   {
/*     */                     
/*     */                     public void onCompletion(MediaPlayer param2MediaPlayer)
/*     */                     {
/* 271 */                       param2MediaPlayer.stop();
/* 272 */                       LibBrowserWebView.null.this.onHideCustomView();
/*     */                     }
/*     */                   });
/*     */               
/* 276 */               LibBrowserWebView.this.m_custom_video_view.setOnErrorListener(new MediaPlayer.OnErrorListener()
/*     */                   {
/*     */                     
/*     */                     public boolean onError(MediaPlayer param2MediaPlayer, int param2Int1, int param2Int2)
/*     */                     {
/* 281 */                       LibBrowserWebView.null.this.onHideCustomView();
/* 282 */                       return true;
/*     */                     }
/*     */                   });
/*     */               
/* 286 */               LibBrowserWebView.this.m_custom_video_view.start();
/*     */             } 
/*     */           } 
/*     */ 
/*     */ 
/*     */           
/* 292 */           LibBrowserWebView.this.m_custom_view_container.addView((View)videoView, (ViewGroup.LayoutParams)new FrameLayout.LayoutParams(-1, -1, 17));
/*     */ 
/*     */ 
/*     */ 
/*     */           
/* 297 */           LibBrowserWebView.this.m_custom_view_callback = param1CustomViewCallback;
/*     */           
/* 299 */           RelativeLayout relativeLayout = NativeControlModule.getNativeControlContainer();
/* 300 */           ViewGroup.LayoutParams layoutParams = NativeControlModule.createLayoutParams(0, 0, relativeLayout.getWidth(), relativeLayout.getHeight());
/*     */           
/* 302 */           relativeLayout.addView((View)LibBrowserWebView.this.m_custom_view_container, layoutParams);
/* 303 */           LibBrowserWebView.this.m_custom_view_container.setVisibility(0);
/*     */         }
/*     */ 
/*     */ 
/*     */ 
/*     */         
/*     */         public void onHideCustomView() {
/* 310 */           if (LibBrowserWebView.this.m_custom_video_view != null) {
/*     */             
/* 312 */             LibBrowserWebView.this.m_custom_video_view.setVisibility(8);
/* 313 */             LibBrowserWebView.this.m_custom_view_container.removeView((View)LibBrowserWebView.this.m_custom_video_view);
/* 314 */             LibBrowserWebView.this.m_custom_video_view = null;
/*     */           } 
/*     */           
/* 317 */           if (LibBrowserWebView.this.m_custom_view_container != null) {
/*     */             
/* 319 */             LibBrowserWebView.this.m_custom_view_container.setVisibility(8);
/* 320 */             NativeControlModule.getNativeControlContainer().removeView((View)LibBrowserWebView.this.m_custom_view_container);
/* 321 */             LibBrowserWebView.this.m_custom_view_container = null;
/*     */             
/* 323 */             LibBrowserWebView.this.m_custom_view_callback.onCustomViewHidden();
/* 324 */             LibBrowserWebView.this.m_custom_view_callback = null;
/*     */           } 
/*     */         }
/*     */ 
/*     */ 
/*     */ 
/*     */         
/*     */         public void showRequestAccessDialog(final String origin, final GeolocationPermissions.Callback callback, String param1String2, String param1String3, String param1String4, String param1String5) {
/* 332 */           DialogInterface.OnClickListener onClickListener = new DialogInterface.OnClickListener()
/*     */             {
/*     */               public void onClick(DialogInterface param2DialogInterface, int param2Int) {
/* 335 */                 boolean bool1 = true;
/* 336 */                 boolean bool2 = true;
/* 337 */                 if (param2Int == -1) {
/* 338 */                   bool2 = true;
/* 339 */                 } else if (param2Int == -2) {
/* 340 */                   bool2 = false;
/* 341 */                 }  callback.invoke(origin, bool2, bool1);
/*     */               }
/*     */             };
/*     */           
/* 345 */           AlertDialog.Builder builder = new AlertDialog.Builder(LibBrowserWebView.this.getContext());
/* 346 */           builder.setTitle(param1String2);
/* 347 */           builder.setMessage(param1String3);
/* 348 */           builder.setPositiveButton(param1String4, onClickListener);
/* 349 */           if (param1String5 != null) {
/* 350 */             builder.setNegativeButton(param1String5, onClickListener);
/*     */           }
/* 352 */           builder.show();
/*     */         }
/*     */         
/*     */         public void onGeolocationPermissionsShowPrompt(String param1String, GeolocationPermissions.Callback param1Callback) {
/* 356 */           showRequestAccessDialog(param1String, param1Callback, "Location Access", param1String + " would like to use your Current Location", "Allow", "Don't Allow");
/*     */         }
/*     */ 
/*     */ 
/*     */         
/*     */         public void onProgressChanged(WebView param1WebView, int param1Int) {
/* 362 */           LibBrowserWebView.this.doProgressChanged(param1WebView.getUrl(), param1Int);
/* 363 */           LibBrowserWebView.wakeEngineThread();
/*     */         }
/*     */       };
/*     */ 
/*     */     
/* 368 */     setWebChromeClient(this.m_chrome_client);
/* 369 */     getSettings().setJavaScriptEnabled(true);
/* 370 */     getSettings().setAllowFileAccessFromFileURLs(true);
/* 371 */     getSettings().setAllowUniversalAccessFromFileURLs(true);
/* 372 */     getSettings().setGeolocationEnabled(true);
/* 373 */     getSettings().setDomStorageEnabled(true);
/* 374 */     getSettings().setPluginState(WebSettings.PluginState.ON);
/* 375 */     getSettings().setBuiltInZoomControls(true);
/* 376 */     addJavascriptInterface(new JSInterface(), "liveCode");
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   static {
/*     */     try {
/* 385 */       mWebView_getOverScrollMode = View.class.getMethod("getOverScrollMode", (Class[])null);
/* 386 */       mWebView_setOverScrollMode = View.class.getMethod("setOverScrollMode", new Class[] { int.class });
/*     */     }
/* 388 */     catch (Exception exception) {
/*     */       
/* 390 */       mWebView_getOverScrollMode = null;
/* 391 */       mWebView_setOverScrollMode = null;
/*     */     } 
/*     */   }
/*     */ 
/*     */   
/*     */   class JSInterface
/*     */   {
/*     */     @JavascriptInterface
/*     */     public void __invokeHandler(String param1String1, String param1String2) {
/* 400 */       if (LibBrowserWebView.this.m_js_handler_list != null && LibBrowserWebView.this.m_js_handler_list.contains(param1String1)) {
/*     */         JSONArray jSONArray;
/*     */ 
/*     */         
/*     */         try {
/* 405 */           jSONArray = new JSONArray(param1String2);
/*     */         }
/* 407 */         catch (JSONException jSONException) {
/*     */           
/* 409 */           jSONArray = new JSONArray();
/*     */         } 
/*     */         
/* 412 */         LibBrowserWebView.this.doCallJSHandler(param1String1, jSONArray);
/* 413 */         LibBrowserWebView.wakeEngineThread();
/*     */       } 
/*     */     }
/*     */ 
/*     */     
/*     */     @JavascriptInterface
/*     */     public void __storeExecuteJavaScriptResult(String param1String1, String param1String2) {
/* 420 */       LibBrowserWebView.this.doJSExecutionResult(param1String1, param1String2);
/* 421 */       LibBrowserWebView.wakeEngineThread();
/*     */     }
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   private void addJSHandler(String paramString) {
/* 429 */     String str = String.format("javascript:liveCode.%s = function() {window.liveCode.__invokeHandler('%s', JSON.stringify(Array.prototype.slice.call(arguments))); }", new Object[] { paramString, paramString });
/* 430 */     loadUrl(str);
/*     */   }
/*     */ 
/*     */   
/*     */   private void removeJSHandler(String paramString) {
/* 435 */     String str = String.format("javascript:delete window.liveCode.%s", new Object[] { paramString, paramString });
/* 436 */     loadUrl(str);
/*     */   }
/*     */ 
/*     */   
/*     */   private void addJSHandlers(List<String> paramList) {
/* 441 */     for (String str : paramList) {
/* 442 */       addJSHandler(str);
/*     */     }
/*     */   }
/*     */   
/*     */   public void setJavaScriptHandlers(String paramString) {
/* 447 */     String[] arrayOfString = null;
/*     */     
/* 449 */     if (!paramString.isEmpty()) {
/* 450 */       arrayOfString = paramString.split("\n");
/*     */     }
/* 452 */     if (this.m_js_handler_list != null)
/*     */     {
/* 454 */       for (String str : this.m_js_handler_list) {
/* 455 */         removeJSHandler(str);
/*     */       }
/*     */     }
/* 458 */     this.m_js_handler_list = null;
/*     */     
/* 460 */     if (arrayOfString != null) {
/*     */       
/* 462 */       this.m_js_handler_list = Arrays.asList(arrayOfString);
/* 463 */       addJSHandlers(this.m_js_handler_list);
/*     */     } 
/*     */     
/* 466 */     this.m_js_handlers = paramString;
/*     */   }
/*     */ 
/*     */   
/*     */   public String getJavaScriptHandlers() {
/* 471 */     return this.m_js_handlers;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void setUrl(String paramString) {
/* 477 */     paramString = LibBrowser.fromAssetPath(paramString);
/*     */     
/* 479 */     loadUrl(paramString);
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean getVerticalScrollbarEnabled() {
/* 489 */     return isVerticalScrollBarEnabled();
/*     */   }
/*     */ 
/*     */   
/*     */   public void setVerticalScrollbarEnabled(boolean paramBoolean) {
/* 494 */     setVerticalScrollBarEnabled(paramBoolean);
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean getHorizontalScrollbarEnabled() {
/* 499 */     return isHorizontalScrollBarEnabled();
/*     */   }
/*     */ 
/*     */   
/*     */   public void setHorizontalScrollbarEnabled(boolean paramBoolean) {
/* 504 */     setHorizontalScrollBarEnabled(paramBoolean);
/*     */   }
/*     */ 
/*     */   
/*     */   public String getUserAgent() {
/* 509 */     return getSettings().getUserAgentString();
/*     */   }
/*     */ 
/*     */   
/*     */   public void setUserAgent(String paramString) {
/* 514 */     getSettings().setUserAgentString(paramString);
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean getIsSecure() {
/* 519 */     return (getCertificate() != null);
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean getAllowUserInteraction() {
/* 524 */     return this.m_allow_user_interaction;
/*     */   }
/*     */ 
/*     */   
/*     */   public void setAllowUserInteraction(boolean paramBoolean) {
/* 529 */     this.m_allow_user_interaction = paramBoolean;
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public void goBack(int paramInt) {
/* 536 */     goBackOrForward(-paramInt);
/*     */   }
/*     */ 
/*     */   
/*     */   public void goForward(int paramInt) {
/* 541 */     goBackOrForward(paramInt);
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public void stop() {
/* 553 */     stopLoading();
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void loadHtml(String paramString1, String paramString2) {
/* 559 */     loadDataWithBaseURL(paramString1, paramString2, "text/html", "utf-8", null);
/*     */   }
/*     */ 
/*     */   
/*     */   public String executeJavaScript(String paramString) {
/* 564 */     SecureRandom secureRandom = new SecureRandom();
/* 565 */     long l = 0L;
/* 566 */     while (l == 0L) {
/* 567 */       l = secureRandom.nextLong();
/*     */     }
/*     */     
/* 570 */     String str = String.format("javascript:{var t_result = ''; try {t_result = eval('%s');} catch(e){t_result = String(e);} window.liveCode.__storeExecuteJavaScriptResult('%d', t_result); }", new Object[] { escapeJSString(paramString), Long.valueOf(l) });
/*     */     
/* 572 */     loadUrl(str);
/*     */     
/* 574 */     return Long.toString(l);
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   private static void wakeEngineThread() {
/* 581 */     Engine.getEngine().wakeEngineThread();
/*     */   }
/*     */   
/* 584 */   private static final Pattern ACCEPTED_URI_SCHEMA = Pattern.compile("(?i)((?:http|https|file):\\/\\/|(?:inline|data|about|javascript):)(.*)");
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   private static boolean useExternalHandler(Context paramContext, String paramString) {
/*     */     Intent intent;
/*     */     try {
/* 597 */       intent = Intent.parseUri(paramString, 1);
/* 598 */     } catch (URISyntaxException uRISyntaxException) {
/* 599 */       Log.w("Browser", "Bad URI " + paramString + ": " + uRISyntaxException.getMessage());
/* 600 */       return false;
/*     */     } 
/*     */ 
/*     */     
/* 604 */     if (paramContext.getPackageManager().resolveActivity(intent, 0) == null) {
/* 605 */       return false;
/*     */     }
/*     */ 
/*     */ 
/*     */     
/* 610 */     intent.addCategory("android.intent.category.BROWSABLE");
/* 611 */     intent.setComponent(null);
/*     */     
/* 613 */     if (ACCEPTED_URI_SCHEMA.matcher(paramString).matches()) {
/* 614 */       return false;
/*     */     }
/*     */     try {
/* 617 */       if (((Activity)paramContext).startActivityIfNeeded(intent, -1)) {
/* 618 */         return true;
/*     */       }
/* 620 */     } catch (ActivityNotFoundException activityNotFoundException) {}
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 625 */     return false;
/*     */   }
/*     */ 
/*     */   
/*     */   public static String escapeJSString(String paramString) {
/* 630 */     String str = "";
/* 631 */     for (char c : paramString.toCharArray()) {
/*     */       
/* 633 */       switch (c) {
/*     */         
/*     */         case '"':
/*     */         case '\'':
/*     */         case '\\':
/* 638 */           str = str + "\\" + c;
/*     */           break;
/*     */         
/*     */         case '\n':
/* 642 */           str = str + "\\n";
/*     */           break;
/*     */         
/*     */         case '\r':
/* 646 */           str = str + "\\r";
/*     */           break;
/*     */         
/*     */         case '\t':
/* 650 */           str = str + "\\r";
/*     */           break;
/*     */         
/*     */         case '\b':
/* 654 */           str = str + "\\r";
/*     */           break;
/*     */         
/*     */         case '\f':
/* 658 */           str = str + "\\r";
/*     */           break;
/*     */         
/*     */         default:
/* 662 */           str = str + c;
/*     */           break;
/*     */       } 
/*     */     
/*     */     } 
/* 667 */     return str;
/*     */   }
/*     */   
/*     */   public native void doCallJSHandler(String paramString, JSONArray paramJSONArray);
/*     */   
/*     */   public native void doJSExecutionResult(String paramString1, String paramString2);
/*     */   
/*     */   public native void doStartedLoading(String paramString);
/*     */   
/*     */   public native void doFinishedLoading(String paramString);
/*     */   
/*     */   public native void doLoadingError(String paramString1, String paramString2);
/*     */   
/*     */   public native void doUnsupportedScheme(String paramString);
/*     */   
/*     */   public native void doProgressChanged(String paramString, int paramInt);
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/libraries/LibBrowserWebView.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */