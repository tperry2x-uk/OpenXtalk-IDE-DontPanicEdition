/*    */ package com.runrev.android;
/*    */ 
/*    */ import android.content.Context;
/*    */ import android.content.pm.ApplicationInfo;
/*    */ import android.content.pm.PackageManager;
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ public class Utils
/*    */ {
/*    */   public static int[] splitIntegerList(String paramString) {
/*    */     try {
/* 28 */       String[] arrayOfString = paramString.split(",");
/* 29 */       int[] arrayOfInt = new int[arrayOfString.length];
/*    */       
/* 31 */       for (byte b = 0; b < arrayOfString.length; b++)
/*    */       {
/* 33 */         arrayOfInt[b] = Integer.parseInt(arrayOfString[b].trim());
/*    */       }
/*    */       
/* 36 */       return arrayOfInt;
/*    */     }
/* 38 */     catch (Exception exception) {
/*    */       
/* 40 */       return null;
/*    */     } 
/*    */   }
/*    */ 
/*    */ 
/*    */ 
/*    */   
/*    */   public static String getLabel(Context paramContext) {
/* 48 */     PackageManager packageManager = paramContext.getPackageManager();
/* 49 */     ApplicationInfo applicationInfo = paramContext.getApplicationInfo();
/* 50 */     applicationInfo.loadLabel(packageManager);
/* 51 */     return packageManager.getApplicationLabel(applicationInfo).toString();
/*    */   }
/*    */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/Utils.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */