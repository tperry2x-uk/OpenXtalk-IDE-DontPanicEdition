/*     */ package com.runrev.android.nativecontrol;
/*     */ 
/*     */ import android.content.Context;
/*     */ import android.graphics.Color;
/*     */ import android.view.View;
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
/*     */ abstract class NativeControl
/*     */ {
/*     */   public static final String TAG = "revandroid.NativeControl";
/*     */   NativeControlModule m_module;
/*     */   protected View m_control_view;
/*     */   protected int m_alpha;
/*     */   private int m_left;
/*     */   private int m_top;
/*     */   private int m_right;
/*     */   private int m_bottom;
/*     */   
/*     */   public NativeControl(NativeControlModule paramNativeControlModule) {
/*  38 */     this.m_alpha = 255;
/*     */     
/*  40 */     this.m_module = paramNativeControlModule;
/*  41 */     this.m_control_view = createView(NativeControlModule.getEngine().getContext());
/*     */     
/*  43 */     this.m_control_view.setVisibility(4);
/*     */   }
/*     */ 
/*     */   
/*     */   public View getView() {
/*  48 */     return this.m_control_view;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public abstract View createView(Context paramContext);
/*     */ 
/*     */   
/*     */   public void onPause() {}
/*     */ 
/*     */   
/*     */   public void onResume() {}
/*     */ 
/*     */   
/*     */   public void setRect(int paramInt1, int paramInt2, int paramInt3, int paramInt4) {
/*  63 */     this.m_module.setNativeControlRect(getView(), paramInt1, paramInt2, paramInt3, paramInt4);
/*  64 */     this.m_left = paramInt1;
/*  65 */     this.m_top = paramInt2;
/*  66 */     this.m_right = paramInt3;
/*  67 */     this.m_bottom = paramInt4;
/*     */   }
/*     */ 
/*     */   
/*     */   public void setVisible(boolean paramBoolean) {
/*  72 */     this.m_control_view.setVisibility(paramBoolean ? 0 : 4);
/*     */   }
/*     */ 
/*     */   
/*     */   public void setAlpha(int paramInt) {
/*  77 */     this.m_alpha = paramInt;
/*  78 */     this.m_control_view.getBackground().setAlpha(paramInt);
/*     */   }
/*     */ 
/*     */   
/*     */   public void setBackgroundColor(int paramInt1, int paramInt2, int paramInt3, int paramInt4) {
/*  83 */     this.m_control_view.setBackgroundColor(Color.argb(paramInt4, paramInt1, paramInt2, paramInt3));
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public int getLeft() {
/*  89 */     return this.m_left;
/*     */   }
/*     */ 
/*     */   
/*     */   public int getTop() {
/*  94 */     return this.m_top;
/*     */   }
/*     */ 
/*     */   
/*     */   public int getRight() {
/*  99 */     return this.m_right;
/*     */   }
/*     */ 
/*     */   
/*     */   public int getBottom() {
/* 104 */     return this.m_bottom;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean getVisible() {
/* 109 */     return (this.m_control_view.getVisibility() == 0);
/*     */   }
/*     */ 
/*     */   
/*     */   public int getBackgroundColor() {
/* 114 */     return this.m_control_view.getDrawingCacheBackgroundColor();
/*     */   }
/*     */ 
/*     */   
/*     */   public int getAlpha() {
/* 119 */     return this.m_alpha;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean handleBackPressed() {
/* 124 */     return false;
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/nativecontrol/NativeControl.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */