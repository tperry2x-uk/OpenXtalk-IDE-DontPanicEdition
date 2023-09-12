/*    */ package com.runrev.android;
/*    */ 
/*    */ import android.content.Context;
/*    */ import android.view.OrientationEventListener;
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
/*    */ public abstract class ScreenOrientationEventListener
/*    */   extends OrientationEventListener
/*    */ {
/* 25 */   int m_orientation = 0;
/*    */   
/*    */   boolean m_orientation_known = false;
/*    */   
/*    */   public int getOrientation() {
/* 30 */     return this.m_orientation;
/*    */   }
/*    */ 
/*    */   
/*    */   public ScreenOrientationEventListener(Context paramContext, int paramInt) {
/* 35 */     super(paramContext);
/* 36 */     this.m_orientation = paramInt;
/*    */   }
/*    */   
/*    */   public void onOrientationChanged(int paramInt) {
/*    */     boolean bool;
/* 41 */     if (this.m_orientation_known && paramInt != -1 && this.m_orientation != -1) {
/*    */ 
/*    */ 
/*    */       
/* 45 */       bool = paramInt - this.m_orientation;
/* 46 */       if (bool < 0)
/* 47 */         bool += 360; 
/* 48 */       if (bool <= 60 || bool >= 'Ĭ') {
/*    */         return;
/*    */       }
/*    */     } 
/*    */     
/* 53 */     if (paramInt == -1) {
/* 54 */       bool = true;
/* 55 */     } else if (paramInt < 45) {
/* 56 */       bool = false;
/* 57 */     } else if (paramInt < 135) {
/* 58 */       bool = true;
/* 59 */     } else if (paramInt < 225) {
/* 60 */       bool = true;
/* 61 */     } else if (paramInt < 315) {
/* 62 */       bool = true;
/*    */     } else {
/* 64 */       bool = false;
/*    */     } 
/* 66 */     this.m_orientation = bool;
/*    */     
/* 68 */     if (this.m_orientation_known) {
/* 69 */       onScreenOrientationChanged(bool);
/*    */     } else {
/* 71 */       this.m_orientation_known = true;
/*    */     } 
/*    */   }
/*    */   
/*    */   public abstract void onScreenOrientationChanged(int paramInt);
/*    */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/ScreenOrientationEventListener.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */