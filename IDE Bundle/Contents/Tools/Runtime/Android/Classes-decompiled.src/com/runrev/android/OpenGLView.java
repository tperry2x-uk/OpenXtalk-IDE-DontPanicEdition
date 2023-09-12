/*     */ package com.runrev.android;
/*     */ 
/*     */ import android.content.Context;
/*     */ import android.util.AttributeSet;
/*     */ import android.util.Log;
/*     */ import android.view.MotionEvent;
/*     */ import android.view.SurfaceHolder;
/*     */ import android.view.SurfaceView;
/*     */ import javax.microedition.khronos.egl.EGL10;
/*     */ import javax.microedition.khronos.egl.EGLConfig;
/*     */ import javax.microedition.khronos.egl.EGLContext;
/*     */ import javax.microedition.khronos.egl.EGLDisplay;
/*     */ import javax.microedition.khronos.egl.EGLSurface;
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
/*     */ public class OpenGLView
/*     */   extends SurfaceView
/*     */   implements SurfaceHolder.Callback
/*     */ {
/*     */   private EGL10 m_egl;
/*     */   private EGLDisplay m_egl_display;
/*     */   private EGLSurface m_egl_surface;
/*     */   private EGLConfig m_egl_config;
/*     */   private EGLContext m_egl_context;
/*     */   
/*     */   public OpenGLView(Context paramContext) {
/*  47 */     super(paramContext);
/*  48 */     initialize();
/*     */   }
/*     */ 
/*     */   
/*     */   public OpenGLView(Context paramContext, AttributeSet paramAttributeSet) {
/*  53 */     super(paramContext, paramAttributeSet);
/*  54 */     initialize();
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean onTouchEvent(MotionEvent paramMotionEvent) {
/*  62 */     return false;
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   private void initialize() {
/*  70 */     SurfaceHolder surfaceHolder = getHolder();
/*  71 */     surfaceHolder.addCallback(this);
/*  72 */     surfaceHolder.setType(2);
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   private EGLConfig findConfig(int paramInt1, int paramInt2, int paramInt3, int paramInt4) {
/*  78 */     int[] arrayOfInt1 = { 12324, paramInt1, 12323, paramInt2, 12322, paramInt3, 12321, paramInt4, 12325, 0, 12326, 0, 12344 };
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
/*  89 */     int[] arrayOfInt2 = new int[1];
/*  90 */     this.m_egl.eglChooseConfig(this.m_egl_display, arrayOfInt1, null, 0, arrayOfInt2);
/*     */ 
/*     */ 
/*     */     
/*  94 */     EGLConfig[] arrayOfEGLConfig = new EGLConfig[arrayOfInt2[0]];
/*  95 */     this.m_egl.eglChooseConfig(this.m_egl_display, arrayOfInt1, arrayOfEGLConfig, arrayOfInt2[0], null);
/*     */ 
/*     */     
/*  98 */     return arrayOfEGLConfig[0];
/*     */   }
/*     */ 
/*     */   
/*     */   public void start() {
/* 103 */     Log.i("revandroid", "OpenGLView.start");
/*     */ 
/*     */     
/* 106 */     this.m_egl = (EGL10)EGLContext.getEGL();
/*     */ 
/*     */     
/* 109 */     this.m_egl_display = this.m_egl.eglGetDisplay(EGL10.EGL_DEFAULT_DISPLAY);
/*     */ 
/*     */ 
/*     */     
/* 113 */     int[] arrayOfInt = new int[2];
/* 114 */     this.m_egl.eglInitialize(this.m_egl_display, arrayOfInt);
/*     */ 
/*     */     
/* 117 */     this.m_egl_config = findConfig(8, 8, 8, 8);
/* 118 */     if (this.m_egl_config == null)
/* 119 */       this.m_egl_config = findConfig(5, 6, 5, 0); 
/* 120 */     if (this.m_egl_config == null)
/* 121 */       this.m_egl_config = findConfig(5, 5, 5, 0); 
/* 122 */     if (this.m_egl_config == null)
/* 123 */       this.m_egl_config = findConfig(4, 4, 4, 4); 
/* 124 */     if (this.m_egl_config == null) {
/* 125 */       this.m_egl_config = findConfig(0, 0, 0, 0);
/*     */     }
/*     */     
/* 128 */     dumpConfig("Using EGLConfig", this.m_egl, this.m_egl_display, this.m_egl_config);
/*     */ 
/*     */     
/* 131 */     this.m_egl_context = this.m_egl.eglCreateContext(this.m_egl_display, this.m_egl_config, EGL10.EGL_NO_CONTEXT, null);
/*     */ 
/*     */     
/* 134 */     this.m_egl_surface = null;
/*     */   }
/*     */ 
/*     */   
/*     */   public void configure() {
/* 139 */     Log.i("revandroid", "OpenGLView.configure");
/*     */ 
/*     */     
/* 142 */     if (this.m_egl_surface != null) {
/*     */       
/* 144 */       this.m_egl.eglMakeCurrent(this.m_egl_display, EGL10.EGL_NO_SURFACE, EGL10.EGL_NO_SURFACE, EGL10.EGL_NO_CONTEXT);
/* 145 */       this.m_egl.eglDestroySurface(this.m_egl_display, this.m_egl_surface);
/*     */     } 
/*     */ 
/*     */     
/* 149 */     this.m_egl_surface = this.m_egl.eglCreateWindowSurface(this.m_egl_display, this.m_egl_config, getHolder(), null);
/*     */ 
/*     */     
/* 152 */     this.m_egl.eglMakeCurrent(this.m_egl_display, this.m_egl_surface, this.m_egl_surface, this.m_egl_context);
/*     */   }
/*     */ 
/*     */   
/*     */   public void finish() {
/* 157 */     Log.i("revandroid", "OpenGLView.finish");
/*     */     
/* 159 */     if (this.m_egl_surface != null) {
/*     */       
/* 161 */       this.m_egl.eglMakeCurrent(this.m_egl_display, EGL10.EGL_NO_SURFACE, EGL10.EGL_NO_SURFACE, EGL10.EGL_NO_CONTEXT);
/* 162 */       this.m_egl.eglDestroySurface(this.m_egl_display, this.m_egl_surface);
/* 163 */       this.m_egl_surface = null;
/*     */     } 
/*     */     
/* 166 */     if (this.m_egl_context != null) {
/*     */       
/* 168 */       this.m_egl.eglDestroyContext(this.m_egl_display, this.m_egl_context);
/* 169 */       this.m_egl_context = null;
/*     */     } 
/*     */     
/* 172 */     if (this.m_egl_display != null) {
/*     */       
/* 174 */       this.m_egl.eglTerminate(this.m_egl_display);
/* 175 */       this.m_egl_display = null;
/*     */     } 
/*     */   }
/*     */ 
/*     */   
/*     */   public void swap() {
/* 181 */     this.m_egl.eglSwapBuffers(this.m_egl_display, this.m_egl_surface);
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public void surfaceCreated(SurfaceHolder paramSurfaceHolder) {
/* 188 */     Log.i("revandroid", "OpenGLView.surfaceCreated");
/* 189 */     doSurfaceCreated(this);
/*     */   }
/*     */ 
/*     */   
/*     */   public void surfaceDestroyed(SurfaceHolder paramSurfaceHolder) {
/* 194 */     Log.i("revandroid", "OpenGLView.surfaceDestroyed");
/* 195 */     doSurfaceDestroyed(this);
/*     */   }
/*     */ 
/*     */   
/*     */   public void surfaceChanged(SurfaceHolder paramSurfaceHolder, int paramInt1, int paramInt2, int paramInt3) {
/* 200 */     Log.i("revandroid", "OpenGLView.surfaceChanged");
/* 201 */     doSurfaceChanged(this);
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public static void dumpConfig(String paramString, EGL10 paramEGL10, EGLDisplay paramEGLDisplay, EGLConfig paramEGLConfig) {
/* 209 */     int[] arrayOfInt = new int[1];
/*     */     
/* 211 */     paramEGL10.eglGetConfigAttrib(paramEGLDisplay, paramEGLConfig, 12324, arrayOfInt);
/* 212 */     int i = arrayOfInt[0];
/* 213 */     paramEGL10.eglGetConfigAttrib(paramEGLDisplay, paramEGLConfig, 12323, arrayOfInt);
/* 214 */     int j = arrayOfInt[0];
/* 215 */     paramEGL10.eglGetConfigAttrib(paramEGLDisplay, paramEGLConfig, 12322, arrayOfInt);
/* 216 */     int k = arrayOfInt[0];
/* 217 */     paramEGL10.eglGetConfigAttrib(paramEGLDisplay, paramEGLConfig, 12321, arrayOfInt);
/* 218 */     int m = arrayOfInt[0];
/* 219 */     paramEGL10.eglGetConfigAttrib(paramEGLDisplay, paramEGLConfig, 12325, arrayOfInt);
/* 220 */     int n = arrayOfInt[0];
/* 221 */     paramEGL10.eglGetConfigAttrib(paramEGLDisplay, paramEGLConfig, 12326, arrayOfInt);
/* 222 */     int i1 = arrayOfInt[0];
/*     */     
/* 224 */     Log.i("revandroid", String.format("OpenGLView: %s (%d, %d, %d, %d, %d, %d)", new Object[] { paramString, Integer.valueOf(i), Integer.valueOf(j), Integer.valueOf(k), Integer.valueOf(m), Integer.valueOf(n), Integer.valueOf(i1) }));
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public static void listConfigs() {
/* 230 */     EGL10 eGL10 = (EGL10)EGLContext.getEGL();
/*     */ 
/*     */     
/* 233 */     EGLDisplay eGLDisplay = eGL10.eglGetDisplay(EGL10.EGL_DEFAULT_DISPLAY);
/*     */     
/* 235 */     int[] arrayOfInt1 = new int[2];
/* 236 */     eGL10.eglInitialize(eGLDisplay, arrayOfInt1);
/*     */ 
/*     */     
/* 239 */     int[] arrayOfInt2 = new int[1];
/* 240 */     eGL10.eglGetConfigs(eGLDisplay, null, 0, arrayOfInt2);
/*     */     
/* 242 */     Log.i("revandroid", "OpenGLView: Found " + arrayOfInt2[0] + " configurations.");
/*     */ 
/*     */     
/* 245 */     EGLConfig[] arrayOfEGLConfig = new EGLConfig[arrayOfInt2[0]];
/* 246 */     eGL10.eglGetConfigs(eGLDisplay, arrayOfEGLConfig, arrayOfInt2[0], null);
/*     */     
/* 248 */     for (byte b = 0; b < arrayOfInt2[0]; b++)
/* 249 */       dumpConfig("Found EGLConfig ", eGL10, eGLDisplay, arrayOfEGLConfig[b]); 
/*     */   }
/*     */   
/*     */   public static native void doSurfaceCreated(OpenGLView paramOpenGLView);
/*     */   
/*     */   public static native void doSurfaceDestroyed(OpenGLView paramOpenGLView);
/*     */   
/*     */   public static native void doSurfaceChanged(OpenGLView paramOpenGLView);
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/OpenGLView.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */