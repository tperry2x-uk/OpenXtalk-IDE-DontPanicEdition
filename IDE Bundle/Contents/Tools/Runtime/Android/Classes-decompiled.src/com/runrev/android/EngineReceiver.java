/*    */ package com.runrev.android;
/*    */ 
/*    */ import android.content.BroadcastReceiver;
/*    */ import android.content.Context;
/*    */ import android.content.Intent;
/*    */ import android.util.Log;
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
/*    */ public class EngineReceiver
/*    */   extends BroadcastReceiver
/*    */ {
/*    */   public static final String TAG = "revandroid.EngineReceiver";
/*    */   
/*    */   public void onReceive(Context paramContext, Intent paramIntent) {
/* 30 */     if (!NotificationModule.onReceive(paramContext, paramIntent))
/*    */     {
/* 32 */       Log.i("revandroid.EngineReceiver", "unhandled intent: " + paramIntent);
/*    */     }
/*    */   }
/*    */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/EngineReceiver.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */