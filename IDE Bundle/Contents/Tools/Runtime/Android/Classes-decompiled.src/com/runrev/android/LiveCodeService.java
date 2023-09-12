/*    */ package com.runrev.android;
/*    */ 
/*    */ import android.app.Service;
/*    */ import android.content.Context;
/*    */ import android.content.Intent;
/*    */ import android.os.IBinder;
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
/*    */ public class LiveCodeService
/*    */   extends Service
/*    */ {
/*    */   public static final String TAG = "revandroid.LiveCodeService";
/*    */   
/*    */   public IBinder onBind(Intent paramIntent) {
/* 30 */     return null;
/*    */   }
/*    */ 
/*    */ 
/*    */   
/*    */   public int onStartCommand(Intent paramIntent, int paramInt1, int paramInt2) {
/* 36 */     return Engine.getEngine().handleStartService((Context)this, paramIntent, paramInt1, paramInt2);
/*    */   }
/*    */ 
/*    */ 
/*    */   
/*    */   public void onDestroy() {
/* 42 */     Engine.getEngine().handleFinishService((Context)this);
/*    */   }
/*    */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/LiveCodeService.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */