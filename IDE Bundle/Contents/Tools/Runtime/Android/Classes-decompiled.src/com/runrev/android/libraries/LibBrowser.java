/*     */ package com.runrev.android.libraries;
/*     */ 
/*     */ import com.runrev.android.Engine;
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
/*     */ public class LibBrowser
/*     */ {
/*     */   public static final String TAG = "revandroid.LibBrowser";
/*     */   private static final String s_asset_path = "/android_asset";
/*     */   private static final String s_file_url_prefix = "file://";
/*     */   private static final String s_livecode_file_url_prefix = "file:";
/*     */   
/*     */   public static String stripExtraSlashes(String paramString) {
/*  59 */     byte b = 0;
/*  60 */     while (paramString.length() > b + 1 && paramString.charAt(b) == '/' && paramString.charAt(b + 1) == '/')
/*  61 */       b++; 
/*  62 */     if (b > 0) {
/*  63 */       return paramString.substring(b);
/*     */     }
/*  65 */     return paramString;
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public static String toAPKPath(String paramString) {
/*  74 */     if (!paramString.startsWith("file://")) {
/*  75 */       return paramString;
/*     */     }
/*  77 */     String str1 = stripExtraSlashes(paramString.substring("file://".length()));
/*     */     
/*  79 */     if (!str1.startsWith("/android_asset")) {
/*  80 */       return paramString;
/*     */     }
/*  82 */     String str2 = Engine.getEngine().getPackagePath();
/*  83 */     return "file:" + str2 + str1.substring("/android_asset".length());
/*     */   }
/*     */ 
/*     */   
/*     */   public static String fromAPKPath(String paramString) {
/*  88 */     if (!paramString.startsWith("file:")) {
/*  89 */       return paramString;
/*     */     }
/*  91 */     String str1 = Engine.getEngine().getPackagePath();
/*  92 */     String str2 = stripExtraSlashes(paramString.substring("file:".length()));
/*     */     
/*  94 */     if (!str2.startsWith(str1)) {
/*  95 */       return paramString;
/*     */     }
/*  97 */     return "file:///android_asset" + str2.substring(str1.length());
/*     */   }
/*     */ 
/*     */   
/*     */   public static String fromAssetPath(String paramString) {
/* 102 */     String str = Engine.getEngine().getPackagePath();
/*     */     
/* 104 */     if (!paramString.startsWith(str)) {
/* 105 */       return paramString;
/*     */     }
/* 107 */     return "file:///android_asset" + paramString.substring(str.length());
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
/*     */   public static Object createBrowserView() {
/* 156 */     return new LibBrowserWebView(Engine.getEngine().getContext());
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/libraries/LibBrowser.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */