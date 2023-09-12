/*     */ package com.runrev.android;
/*     */ 
/*     */ import android.hardware.Camera;
/*     */ import android.util.Log;
/*     */ import java.lang.reflect.Constructor;
/*     */ import java.lang.reflect.Field;
/*     */ import java.lang.reflect.Method;
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
/*     */ class CameraCompat
/*     */ {
/*     */   private static Method mCamera_getNumberOfCameras;
/*     */   private static Method mCamera_getCameraInfo;
/*     */   private static Class mCameraInfo_class;
/*     */   private static Object mCameraInfo_instance;
/*     */   private static Field mCameraInfo_facing;
/*     */   private static Field mCameraInfo_orientation;
/*     */   
/*     */   static {
/*  33 */     initCompatibility();
/*     */   }
/*     */ 
/*     */   
/*     */   static class CameraInfo
/*     */   {
/*     */     public static final int CAMERA_FACING_BACK = 0;
/*     */     public static final int CAMERA_FACING_FRONT = 1;
/*     */     public int facing;
/*     */     public int orientation;
/*     */   }
/*     */   
/*     */   private static void initCompatibility() {
/*  46 */     Log.i("revandroid", "initialising CameraCompat class");
/*     */     
/*     */     try {
/*  49 */       mCamera_getNumberOfCameras = Camera.class.getMethod("getNumberOfCameras", (Class[])null);
/*     */     }
/*  51 */     catch (Exception exception) {
/*     */       
/*  53 */       mCamera_getNumberOfCameras = null;
/*     */     } 
/*     */ 
/*     */     
/*     */     try {
/*  58 */       mCameraInfo_class = ClassLoader.getSystemClassLoader().loadClass("android.hardware.Camera$CameraInfo");
/*     */       
/*  60 */       Constructor constructor = mCameraInfo_class.getConstructor((Class[])null);
/*  61 */       mCameraInfo_instance = constructor.newInstance((Object[])null);
/*     */       
/*  63 */       mCameraInfo_facing = mCameraInfo_class.getField("facing");
/*  64 */       mCameraInfo_orientation = mCameraInfo_class.getField("orientation");
/*     */     }
/*  66 */     catch (Exception exception) {
/*     */       
/*  68 */       mCameraInfo_class = null;
/*  69 */       mCameraInfo_instance = null;
/*     */       
/*  71 */       mCameraInfo_facing = null;
/*  72 */       mCameraInfo_orientation = null;
/*     */     } 
/*     */ 
/*     */     
/*     */     try {
/*  77 */       mCamera_getCameraInfo = Camera.class.getMethod("getCameraInfo", new Class[] { int.class, mCameraInfo_class });
/*     */     }
/*  79 */     catch (Exception exception) {
/*     */       
/*  81 */       mCamera_getCameraInfo = null;
/*     */     } 
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public static int getNumberOfCameras() {
/*  88 */     if (mCamera_getNumberOfCameras == null) {
/*     */       
/*     */       try {
/*     */         
/*  92 */         Camera camera = Camera.open();
/*  93 */         if (camera == null)
/*  94 */           return 0; 
/*  95 */         camera.release();
/*  96 */         return 1;
/*     */       }
/*  98 */       catch (Exception exception) {
/*     */         
/* 100 */         Log.i("revandroid", "can't open camera: " + exception.toString());
/* 101 */         return 0;
/*     */       } 
/*     */     }
/*     */ 
/*     */ 
/*     */ 
/*     */     
/*     */     try {
/* 109 */       Object object = mCamera_getNumberOfCameras.invoke(null, (Object[])null);
/* 110 */       return ((Integer)object).intValue();
/*     */     }
/* 112 */     catch (Exception exception) {
/*     */       
/* 114 */       return 0;
/*     */     } 
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public static void getCameraInfo(int paramInt, CameraInfo paramCameraInfo) {
/* 121 */     if (mCamera_getCameraInfo == null) {
/*     */       
/* 123 */       paramCameraInfo.facing = 0;
/* 124 */       paramCameraInfo.orientation = 0;
/*     */ 
/*     */       
/*     */       return;
/*     */     } 
/*     */ 
/*     */     
/*     */     try {
/* 132 */       mCamera_getCameraInfo.invoke(null, new Object[] { new Integer(paramInt), mCameraInfo_instance });
/* 133 */       paramCameraInfo.facing = mCameraInfo_facing.getInt(mCameraInfo_instance);
/* 134 */       paramCameraInfo.orientation = mCameraInfo_orientation.getInt(mCameraInfo_instance);
/*     */     }
/* 136 */     catch (Exception exception) {
/*     */       return;
/*     */     } 
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/CameraCompat.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */