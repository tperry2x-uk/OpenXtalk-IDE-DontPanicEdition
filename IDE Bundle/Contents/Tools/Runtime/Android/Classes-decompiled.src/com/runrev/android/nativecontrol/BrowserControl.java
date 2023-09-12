/*     */ package com.runrev.android.nativecontrol;
/*     */ 
/*     */ import android.app.AlertDialog;
/*     */ import android.content.ActivityNotFoundException;
/*     */ import android.content.Context;
/*     */ import android.content.DialogInterface;
/*     */ import android.content.Intent;
/*     */ import android.content.IntentFilter;
/*     */ import android.content.pm.PackageManager;
/*     */ import android.content.pm.ResolveInfo;
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
/*     */ import java.lang.reflect.Method;
/*     */ import java.net.URISyntaxException;
/*     */ import java.security.SecureRandom;
/*     */ import java.util.List;
/*     */ import java.util.regex.Pattern;
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ class BrowserControl
/*     */   extends NativeControl
/*     */ {
/*     */   public static final String TAG = "revandroid.NativeBrowserControl";
/*     */   private static Method mWebView_getOverScrollMode;
/*     */   private static Method mWebView_setOverScrollMode;
/*     */   private boolean m_is_apk_url;
/*     */   private boolean m_scrolling_enabled;
/*     */   private VideoView m_custom_video_view;
/*     */   private FrameLayout m_custom_view_container;
/*     */   private WebChromeClient.CustomViewCallback m_custom_view_callback;
/*     */   private WebChromeClient m_chrome_client;
/*     */   
/*     */   static {
/*     */     try {
/*  54 */       mWebView_getOverScrollMode = View.class.getMethod("getOverScrollMode", (Class[])null);
/*  55 */       mWebView_setOverScrollMode = View.class.getMethod("setOverScrollMode", new Class[] { int.class });
/*     */     }
/*  57 */     catch (Exception exception) {
/*     */       
/*  59 */       mWebView_getOverScrollMode = null;
/*  60 */       mWebView_setOverScrollMode = null;
/*     */     } 
/*     */   }
/*     */ 
/*     */   
/*     */   public BrowserControl(NativeControlModule paramNativeControlModule) {
/*  66 */     super(paramNativeControlModule);
/*  67 */     this.m_is_apk_url = false;
/*  68 */     this.m_scrolling_enabled = true;
/*     */   }
/*     */ 
/*     */   
/*     */   class JSInterface
/*     */   {
/*     */     @JavascriptInterface
/*     */     public void storeResult(String param1String1, String param1String2) {
/*  76 */       BrowserControl.doJSExecutionResult(param1String1, param1String2);
/*  77 */       NativeControlModule.getEngine().wakeEngineThread();
/*     */     }
/*     */   }
/*     */   
/*  81 */   static final Pattern ACCEPTED_URI_SCHEMA = Pattern.compile("(?i)((?:http|https|file):\\/\\/|(?:inline|data|about|javascript):)(.*)");
/*     */ 
/*     */ 
/*     */   
/*     */   private static final String s_asset_path = "/android_asset";
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   private boolean isSpecializedHandlerAvailable(Intent paramIntent) {
/*  91 */     PackageManager packageManager = NativeControlModule.getContext().getPackageManager();
/*  92 */     List list = packageManager.queryIntentActivities(paramIntent, 64);
/*     */     
/*  94 */     if (list == null || list.size() == 0) {
/*  95 */       return false;
/*     */     }
/*  97 */     for (ResolveInfo resolveInfo : list) {
/*  98 */       IntentFilter intentFilter = resolveInfo.filter;
/*  99 */       if (intentFilter == null) {
/*     */         continue;
/*     */       }
/*     */ 
/*     */       
/* 104 */       if (intentFilter.countDataAuthorities() == 0 || intentFilter.countDataPaths() == 0) {
/*     */         continue;
/*     */       }
/*     */       
/* 108 */       return true;
/*     */     } 
/* 110 */     return false;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   private boolean useExternalHandler(String paramString) {
/*     */     Intent intent;
/*     */     try {
/* 118 */       intent = Intent.parseUri(paramString, 1);
/* 119 */     } catch (URISyntaxException uRISyntaxException) {
/* 120 */       Log.w("Browser", "Bad URI " + paramString + ": " + uRISyntaxException.getMessage());
/* 121 */       return false;
/*     */     } 
/*     */ 
/*     */     
/* 125 */     if (NativeControlModule.getContext().getPackageManager().resolveActivity(intent, 0) == null) {
/* 126 */       return false;
/*     */     }
/*     */ 
/*     */ 
/*     */     
/* 131 */     intent.addCategory("android.intent.category.BROWSABLE");
/* 132 */     intent.setComponent(null);
/*     */     
/* 134 */     if (ACCEPTED_URI_SCHEMA.matcher(paramString).matches()) {
/* 135 */       return false;
/*     */     }
/*     */     try {
/* 138 */       if (NativeControlModule.getActivity().startActivityIfNeeded(intent, -1)) {
/* 139 */         return true;
/*     */       }
/* 141 */     } catch (ActivityNotFoundException activityNotFoundException) {}
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 146 */     return false;
/*     */   }
/*     */ 
/*     */   
/*     */   public View createView(Context paramContext) {
/* 151 */     WebView webView = new WebView(paramContext);
/* 152 */     webView.setWebViewClient(new WebViewClient()
/*     */         {
/*     */           
/*     */           public boolean shouldOverrideUrlLoading(WebView param1WebView, String param1String)
/*     */           {
/* 157 */             if (BrowserControl.this.useExternalHandler(param1String)) {
/* 158 */               return true;
/*     */             }
/* 160 */             BrowserControl.this.setUrl(param1String);
/* 161 */             return true;
/*     */           }
/*     */ 
/*     */ 
/*     */           
/*     */           public void onPageStarted(WebView param1WebView, String param1String, Bitmap param1Bitmap) {
/* 167 */             BrowserControl.this.doStartedLoading(BrowserControl.this.toAPKPath(param1String));
/* 168 */             NativeControlModule.getEngine().wakeEngineThread();
/*     */           }
/*     */ 
/*     */ 
/*     */           
/*     */           public void onPageFinished(WebView param1WebView, String param1String) {
/* 174 */             BrowserControl.this.doFinishedLoading(BrowserControl.this.toAPKPath(param1String));
/* 175 */             NativeControlModule.getEngine().wakeEngineThread();
/*     */           }
/*     */ 
/*     */           
/*     */           public void onReceivedError(WebView param1WebView, int param1Int, String param1String1, String param1String2) {
/* 180 */             BrowserControl.this.doLoadingError(BrowserControl.this.toAPKPath(param1String2), param1String1);
/* 181 */             NativeControlModule.getEngine().wakeEngineThread();
/*     */           }
/*     */         });
/*     */     
/* 185 */     webView.setOnTouchListener(new View.OnTouchListener()
/*     */         {
/*     */           
/*     */           public boolean onTouch(View param1View, MotionEvent param1MotionEvent)
/*     */           {
/* 190 */             switch (param1MotionEvent.getAction()) {
/*     */               
/*     */               case 0:
/*     */               case 1:
/* 194 */                 if (!param1View.hasFocus())
/*     */                 {
/* 196 */                   param1View.requestFocus();
/*     */                 }
/*     */                 break;
/*     */             } 
/* 200 */             return false;
/*     */           }
/*     */         });
/*     */     
/* 204 */     this.m_chrome_client = new WebChromeClient()
/*     */       {
/*     */         public void onShowCustomView(View param1View, WebChromeClient.CustomViewCallback param1CustomViewCallback)
/*     */         {
/*     */           VideoView videoView;
/* 209 */           BrowserControl.this.m_custom_view_container = new FrameLayout(BrowserControl.this.getView().getContext())
/*     */             {
/*     */               public boolean onTouchEvent(MotionEvent param2MotionEvent)
/*     */               {
/* 213 */                 return true;
/*     */               }
/*     */             };
/*     */           
/* 217 */           BrowserControl.this.m_custom_view_container.setBackgroundColor(-16777216);
/*     */           
/* 219 */           if (param1View instanceof FrameLayout) {
/*     */             
/* 221 */             FrameLayout frameLayout = (FrameLayout)param1View;
/*     */             
/* 223 */             if (frameLayout.getFocusedChild() instanceof VideoView) {
/*     */               
/* 225 */               BrowserControl.this.m_custom_video_view = (VideoView)frameLayout.getFocusedChild();
/*     */               
/* 227 */               frameLayout.removeView((View)BrowserControl.this.m_custom_video_view);
/* 228 */               videoView = BrowserControl.this.m_custom_video_view;
/*     */               
/* 230 */               BrowserControl.this.m_custom_video_view.setOnCompletionListener(new MediaPlayer.OnCompletionListener()
/*     */                   {
/*     */                     
/*     */                     public void onCompletion(MediaPlayer param2MediaPlayer)
/*     */                     {
/* 235 */                       param2MediaPlayer.stop();
/* 236 */                       BrowserControl.null.this.onHideCustomView();
/*     */                     }
/*     */                   });
/*     */               
/* 240 */               BrowserControl.this.m_custom_video_view.setOnErrorListener(new MediaPlayer.OnErrorListener()
/*     */                   {
/*     */                     
/*     */                     public boolean onError(MediaPlayer param2MediaPlayer, int param2Int1, int param2Int2)
/*     */                     {
/* 245 */                       BrowserControl.null.this.onHideCustomView();
/* 246 */                       return true;
/*     */                     }
/*     */                   });
/*     */               
/* 250 */               BrowserControl.this.m_custom_video_view.start();
/*     */             } 
/*     */           } 
/*     */ 
/*     */ 
/*     */           
/* 256 */           BrowserControl.this.m_custom_view_container.addView((View)videoView, (ViewGroup.LayoutParams)new FrameLayout.LayoutParams(-1, -1, 17));
/*     */ 
/*     */ 
/*     */ 
/*     */           
/* 261 */           BrowserControl.this.m_custom_view_callback = param1CustomViewCallback;
/*     */           
/* 263 */           RelativeLayout relativeLayout = NativeControlModule.getNativeControlContainer();
/* 264 */           ViewGroup.LayoutParams layoutParams = NativeControlModule.createLayoutParams(0, 0, relativeLayout.getWidth(), relativeLayout.getHeight());
/*     */           
/* 266 */           relativeLayout.addView((View)BrowserControl.this.m_custom_view_container, layoutParams);
/* 267 */           BrowserControl.this.m_custom_view_container.setVisibility(0);
/*     */         }
/*     */ 
/*     */ 
/*     */ 
/*     */         
/*     */         public void onHideCustomView() {
/* 274 */           if (BrowserControl.this.m_custom_video_view != null) {
/*     */             
/* 276 */             BrowserControl.this.m_custom_video_view.setVisibility(8);
/* 277 */             BrowserControl.this.m_custom_view_container.removeView((View)BrowserControl.this.m_custom_video_view);
/* 278 */             BrowserControl.this.m_custom_video_view = null;
/*     */           } 
/*     */           
/* 281 */           if (BrowserControl.this.m_custom_view_container != null) {
/*     */             
/* 283 */             BrowserControl.this.m_custom_view_container.setVisibility(8);
/* 284 */             NativeControlModule.getNativeControlContainer().removeView((View)BrowserControl.this.m_custom_view_container);
/* 285 */             BrowserControl.this.m_custom_view_container = null;
/*     */             
/* 287 */             BrowserControl.this.m_custom_view_callback.onCustomViewHidden();
/* 288 */             BrowserControl.this.m_custom_view_callback = null;
/*     */           } 
/*     */         }
/*     */ 
/*     */ 
/*     */ 
/*     */         
/*     */         public void showRequestAccessDialog(final String origin, final GeolocationPermissions.Callback callback, String param1String2, String param1String3, String param1String4, String param1String5) {
/* 296 */           DialogInterface.OnClickListener onClickListener = new DialogInterface.OnClickListener()
/*     */             {
/*     */               public void onClick(DialogInterface param2DialogInterface, int param2Int) {
/* 299 */                 boolean bool1 = true;
/* 300 */                 boolean bool2 = true;
/* 301 */                 if (param2Int == -1) {
/* 302 */                   bool2 = true;
/* 303 */                 } else if (param2Int == -2) {
/* 304 */                   bool2 = false;
/* 305 */                 }  callback.invoke(origin, bool2, bool1);
/*     */               }
/*     */             };
/*     */           
/* 309 */           AlertDialog.Builder builder = new AlertDialog.Builder(BrowserControl.this.getView().getContext());
/* 310 */           builder.setTitle(param1String2);
/* 311 */           builder.setMessage(param1String3);
/* 312 */           builder.setPositiveButton(param1String4, onClickListener);
/* 313 */           if (param1String5 != null) {
/* 314 */             builder.setNegativeButton(param1String5, onClickListener);
/*     */           }
/* 316 */           builder.show();
/*     */         }
/*     */         
/*     */         public void onGeolocationPermissionsShowPrompt(String param1String, GeolocationPermissions.Callback param1Callback) {
/* 320 */           showRequestAccessDialog(param1String, param1Callback, "Location Access", param1String + " would like to use your Current Location", "Allow", "Don't Allow");
/*     */         }
/*     */       };
/* 323 */     webView.setWebChromeClient(this.m_chrome_client);
/* 324 */     webView.getSettings().setJavaScriptEnabled(true);
/* 325 */     webView.getSettings().setAllowFileAccessFromFileURLs(true);
/* 326 */     webView.getSettings().setAllowUniversalAccessFromFileURLs(true);
/* 327 */     webView.getSettings().setGeolocationEnabled(true);
/* 328 */     webView.getSettings().setDomStorageEnabled(true);
/* 329 */     webView.getSettings().setPluginState(WebSettings.PluginState.ON);
/* 330 */     webView.getSettings().setBuiltInZoomControls(true);
/* 331 */     webView.addJavascriptInterface(new JSInterface(), "revjs");
/*     */     
/* 333 */     return (View)webView;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean handleBackPressed() {
/* 338 */     if (this.m_custom_view_container != null && this.m_chrome_client != null) {
/*     */       
/* 340 */       this.m_chrome_client.onHideCustomView();
/* 341 */       return true;
/*     */     } 
/*     */     
/* 344 */     return false;
/*     */   }
/*     */ 
/*     */   
/*     */   public static String stripExtraSlashes(String paramString) {
/* 349 */     byte b = 0;
/* 350 */     while (paramString.length() > b + 1 && paramString.charAt(b) == '/' && paramString.charAt(b + 1) == '/')
/* 351 */       b++; 
/* 352 */     if (b > 0) {
/* 353 */       return paramString.substring(b);
/*     */     }
/* 355 */     return paramString;
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public String toAPKPath(String paramString) {
/* 362 */     if (!this.m_is_apk_url) {
/* 363 */       return paramString;
/*     */     }
/* 365 */     if (!paramString.startsWith("file://")) {
/* 366 */       return paramString;
/*     */     }
/* 368 */     String str1 = stripExtraSlashes(paramString.substring(7));
/*     */     
/* 370 */     if (!str1.startsWith("/android_asset")) {
/* 371 */       return paramString;
/*     */     }
/* 373 */     String str2 = NativeControlModule.getEngine().getPackagePath();
/* 374 */     return "file:" + str2 + str1.substring("/android_asset".length());
/*     */   }
/*     */ 
/*     */   
/*     */   public String fromAPKPath(String paramString) {
/* 379 */     this.m_is_apk_url = false;
/*     */     
/* 381 */     if (!paramString.startsWith("file:")) {
/* 382 */       return paramString;
/*     */     }
/* 384 */     String str1 = NativeControlModule.getEngine().getPackagePath();
/* 385 */     String str2 = stripExtraSlashes(paramString.substring(5));
/*     */     
/* 387 */     if (!str2.startsWith(str1)) {
/* 388 */       return paramString;
/*     */     }
/* 390 */     this.m_is_apk_url = true;
/* 391 */     return "file:///android_asset" + str2.substring(str1.length());
/*     */   }
/*     */ 
/*     */   
/*     */   public void setUrl(String paramString) {
/* 396 */     paramString = fromAPKPath(paramString);
/*     */     
/* 398 */     ((WebView)this.m_control_view).loadUrl(paramString);
/*     */   }
/*     */ 
/*     */   
/*     */   public String getUrl() {
/* 403 */     return toAPKPath(((WebView)this.m_control_view).getUrl());
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean canGoBack() {
/* 408 */     return ((WebView)this.m_control_view).canGoBack();
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean canGoForward() {
/* 413 */     return ((WebView)this.m_control_view).canGoForward();
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean getCanBounce() {
/* 418 */     if (mWebView_getOverScrollMode == null) {
/* 419 */       return true;
/*     */     }
/*     */     
/*     */     try {
/* 423 */       return (((Integer)mWebView_getOverScrollMode.invoke(this.m_control_view, (Object[])null)).intValue() == 0);
/*     */     }
/* 425 */     catch (Exception exception) {
/*     */ 
/*     */ 
/*     */       
/* 429 */       return true;
/*     */     } 
/*     */   }
/*     */   
/*     */   public void setCanBounce(boolean paramBoolean) {
/* 434 */     if (mWebView_setOverScrollMode == null) {
/*     */       return;
/*     */     }
/*     */     
/*     */     try {
/* 439 */       mWebView_setOverScrollMode.invoke(this.m_control_view, new Object[] { new Integer(paramBoolean ? 0 : 2) });
/*     */     }
/* 441 */     catch (Exception exception) {}
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean getScrollingEnabled() {
/* 448 */     return this.m_scrolling_enabled;
/*     */   }
/*     */ 
/*     */   
/*     */   public void setScrollingEnabled(boolean paramBoolean) {
/* 453 */     if (this.m_scrolling_enabled == paramBoolean)
/*     */       return; 
/* 455 */     this.m_scrolling_enabled = paramBoolean;
/* 456 */     ((WebView)this.m_control_view).setHorizontalScrollBarEnabled(paramBoolean);
/* 457 */     ((WebView)this.m_control_view).setVerticalScrollBarEnabled(paramBoolean);
/* 458 */     ((WebView)this.m_control_view).getSettings().setBuiltInZoomControls(paramBoolean);
/* 459 */     if (!this.m_scrolling_enabled) {
/*     */       
/* 461 */       this.m_control_view.setOnTouchListener(new View.OnTouchListener()
/*     */           {
/*     */             public boolean onTouch(View param1View, MotionEvent param1MotionEvent) {
/* 464 */               return (param1MotionEvent.getAction() == 2);
/*     */             }
/*     */           });
/*     */     } else {
/*     */       
/* 469 */       this.m_control_view.setOnTouchListener(null);
/*     */     } 
/*     */   }
/*     */   
/*     */   public void goBack(int paramInt) {
/* 474 */     ((WebView)this.m_control_view).goBackOrForward(-paramInt);
/*     */   }
/*     */ 
/*     */   
/*     */   public void goForward(int paramInt) {
/* 479 */     ((WebView)this.m_control_view).goBackOrForward(paramInt);
/*     */   }
/*     */ 
/*     */   
/*     */   public void reload() {
/* 484 */     ((WebView)this.m_control_view).reload();
/*     */   }
/*     */ 
/*     */   
/*     */   public void stop() {
/* 489 */     ((WebView)this.m_control_view).stopLoading();
/*     */   }
/*     */ 
/*     */   
/*     */   public void loadData(String paramString1, String paramString2) {
/* 494 */     ((WebView)this.m_control_view).loadDataWithBaseURL(fromAPKPath(paramString1), paramString2, "text/html", "utf-8", null);
/*     */   }
/*     */ 
/*     */   
/*     */   public static String escapeJSString(String paramString) {
/* 499 */     String str = "";
/* 500 */     for (char c : paramString.toCharArray()) {
/*     */       
/* 502 */       switch (c) {
/*     */         
/*     */         case '"':
/*     */         case '\'':
/*     */         case '\\':
/* 507 */           str = str + "\\" + c;
/*     */           break;
/*     */         
/*     */         case '\n':
/* 511 */           str = str + "\\n";
/*     */           break;
/*     */         
/*     */         case '\r':
/* 515 */           str = str + "\\r";
/*     */           break;
/*     */         
/*     */         case '\t':
/* 519 */           str = str + "\\r";
/*     */           break;
/*     */         
/*     */         case '\b':
/* 523 */           str = str + "\\r";
/*     */           break;
/*     */         
/*     */         case '\f':
/* 527 */           str = str + "\\r";
/*     */           break;
/*     */         
/*     */         default:
/* 531 */           str = str + c;
/*     */           break;
/*     */       } 
/*     */     
/*     */     } 
/* 536 */     return str;
/*     */   }
/*     */ 
/*     */   
/*     */   public String executeJavaScript(String paramString) {
/* 541 */     SecureRandom secureRandom = new SecureRandom();
/* 542 */     long l = 0L;
/* 543 */     while (l == 0L) {
/* 544 */       l = secureRandom.nextLong();
/*     */     }
/*     */     
/* 547 */     String str = String.format("javascript:window.revjs.storeResult('%d', eval('%s'))", new Object[] { Long.valueOf(l), escapeJSString(paramString) });
/*     */     
/* 549 */     ((WebView)this.m_control_view).loadUrl(str);
/*     */     
/* 551 */     return Long.toString(l);
/*     */   }
/*     */   
/*     */   public static native void doJSExecutionResult(String paramString1, String paramString2);
/*     */   
/*     */   public native void doStartedLoading(String paramString);
/*     */   
/*     */   public native void doFinishedLoading(String paramString);
/*     */   
/*     */   public native void doLoadingError(String paramString1, String paramString2);
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/nativecontrol/BrowserControl.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */