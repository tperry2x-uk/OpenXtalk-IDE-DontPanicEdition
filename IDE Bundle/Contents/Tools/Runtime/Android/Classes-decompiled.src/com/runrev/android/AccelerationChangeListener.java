/*    */ package com.runrev.android;
/*    */ 
/*    */ import android.content.Context;
/*    */ import android.hardware.Sensor;
/*    */ import android.hardware.SensorEvent;
/*    */ import android.hardware.SensorEventListener;
/*    */ import android.hardware.SensorManager;
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
/*    */ abstract class AccelerationChangeListener
/*    */   implements SensorEventListener
/*    */ {
/*    */   private SensorManager m_sensorMgr;
/*    */   private Sensor m_accelerometer;
/*    */   private boolean m_listening;
/*    */   private boolean m_paused;
/*    */   private boolean m_registered;
/*    */   
/*    */   class AccelerationNotSupportedException
/*    */     extends Exception {}
/*    */   
/* 36 */   private int m_sensor_delay = 1;
/*    */ 
/*    */   
/*    */   public AccelerationChangeListener(Context paramContext, int paramInt) {
/* 40 */     this.m_sensor_delay = paramInt;
/* 41 */     this.m_sensorMgr = (SensorManager)paramContext.getSystemService("sensor");
/* 42 */     this.m_listening = false;
/* 43 */     this.m_paused = false;
/* 44 */     this.m_registered = false;
/* 45 */     this.m_accelerometer = this.m_sensorMgr.getDefaultSensor(1);
/*    */   }
/*    */ 
/*    */   
/*    */   private void register() {
/* 50 */     if (!this.m_registered && this.m_listening && !this.m_paused)
/*    */     {
/* 52 */       this.m_registered = this.m_sensorMgr.registerListener(this, this.m_accelerometer, this.m_sensor_delay);
/*    */     }
/*    */   }
/*    */ 
/*    */   
/*    */   private void unregister() {
/* 58 */     if (this.m_registered && (!this.m_listening || this.m_paused)) {
/*    */       
/* 60 */       this.m_sensorMgr.unregisterListener(this);
/* 61 */       this.m_registered = false;
/*    */     } 
/*    */   }
/*    */ 
/*    */   
/*    */   public void setListening(boolean paramBoolean) {
/* 67 */     this.m_listening = paramBoolean;
/* 68 */     if (this.m_listening) {
/* 69 */       register();
/*    */     } else {
/* 71 */       unregister();
/*    */     } 
/*    */   }
/*    */   
/*    */   public void onPause() {
/* 76 */     this.m_paused = true;
/* 77 */     unregister();
/*    */   }
/*    */ 
/*    */   
/*    */   public void onResume() {
/* 82 */     this.m_paused = false;
/* 83 */     register();
/*    */   }
/*    */ 
/*    */ 
/*    */   
/*    */   public void onAccuracyChanged(Sensor paramSensor, int paramInt) {}
/*    */ 
/*    */   
/*    */   public void onSensorChanged(SensorEvent paramSensorEvent) {
/* 92 */     if (paramSensorEvent.sensor.getType() == 1) {
/*    */ 
/*    */       
/* 95 */       float f1 = paramSensorEvent.values[0];
/* 96 */       float f2 = paramSensorEvent.values[1];
/* 97 */       float f3 = paramSensorEvent.values[2];
/* 98 */       onAccelerationChanged(f1, f2, f3, paramSensorEvent.timestamp);
/*    */     } 
/*    */   }
/*    */   
/*    */   public abstract void onAccelerationChanged(float paramFloat1, float paramFloat2, float paramFloat3, long paramLong);
/*    */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/AccelerationChangeListener.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */