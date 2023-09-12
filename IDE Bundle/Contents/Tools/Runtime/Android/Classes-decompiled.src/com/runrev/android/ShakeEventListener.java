/*    */ package com.runrev.android;
/*    */ 
/*    */ import android.content.Context;
/*    */ import android.hardware.SensorEventListener;
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
/*    */ abstract class ShakeEventListener
/*    */   extends AccelerationChangeListener
/*    */   implements SensorEventListener
/*    */ {
/*    */   public static final int SHAKE_BEGAN = 0;
/*    */   public static final int SHAKE_CANCELLED = 1;
/*    */   public static final int SHAKE_ENDED = 2;
/* 30 */   private long m_lastUpdate = -1L;
/*    */   
/*    */   private float m_x;
/*    */   
/*    */   private float m_y;
/*    */   private float m_z;
/*    */   private float m_last_x;
/*    */   
/*    */   public ShakeEventListener(Context paramContext) {
/* 39 */     super(paramContext, 3);
/*    */   }
/*    */   private float m_last_y; private float m_last_z; private boolean m_shaking = false; private static final int SHAKE_THRESHOLD = 800;
/*    */   
/*    */   public void onAccelerationChanged(float paramFloat1, float paramFloat2, float paramFloat3, long paramLong) {
/* 44 */     long l = System.currentTimeMillis();
/*    */     
/* 46 */     if (this.m_lastUpdate == -1L) {
/*    */       
/* 48 */       this.m_last_x = paramFloat1;
/* 49 */       this.m_last_y = paramFloat2;
/* 50 */       this.m_last_z = paramFloat3;
/* 51 */       this.m_lastUpdate = l;
/*    */     } 
/*    */     
/* 54 */     this.m_x = paramFloat1;
/* 55 */     this.m_y = paramFloat2;
/* 56 */     this.m_z = paramFloat3;
/*    */     
/* 58 */     if (l - this.m_lastUpdate > 100L) {
/*    */       
/* 60 */       float f = (Math.abs(this.m_x - this.m_last_x) + Math.abs(this.m_y - this.m_last_y) + Math.abs(this.m_z - this.m_last_z)) / (float)(l - this.m_lastUpdate) * 10000.0F;
/*    */       
/* 62 */       this.m_lastUpdate = l;
/* 63 */       this.m_last_x = this.m_x;
/* 64 */       this.m_last_y = this.m_y;
/* 65 */       this.m_last_z = this.m_z;
/*    */       
/* 67 */       if (f > 800.0F) {
/*    */         
/* 69 */         if (!this.m_shaking)
/*    */         {
/* 71 */           this.m_shaking = true;
/* 72 */           onShake(0, paramLong);
/*    */         
/*    */         }
/*    */       
/*    */       }
/* 77 */       else if (this.m_shaking) {
/*    */         
/* 79 */         this.m_shaking = false;
/* 80 */         onShake(2, paramLong);
/*    */       } 
/*    */     } 
/*    */   }
/*    */   
/*    */   public abstract void onShake(int paramInt, long paramLong);
/*    */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/ShakeEventListener.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */