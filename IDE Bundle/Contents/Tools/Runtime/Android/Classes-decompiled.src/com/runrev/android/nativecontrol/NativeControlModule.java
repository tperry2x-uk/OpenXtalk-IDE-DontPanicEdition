/*     */ package com.runrev.android.nativecontrol;
/*     */ 
/*     */ import android.app.Activity;
/*     */ import android.content.Context;
/*     */ import android.view.View;
/*     */ import android.view.ViewGroup;
/*     */ import android.widget.FrameLayout;
/*     */ import android.widget.RelativeLayout;
/*     */ import com.runrev.android.Engine;
/*     */ import java.lang.reflect.Constructor;
/*     */ import java.util.ArrayList;
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
/*     */ public class NativeControlModule
/*     */ {
/*     */   public static final String TAG = "revandroid.NativeControlModule";
/*     */   protected static Engine m_engine;
/*     */   protected static RelativeLayout m_layout;
/*     */   protected ViewGroup m_parent;
/*     */   protected ArrayList<NativeControl> m_controls;
/*     */   
/*     */   public NativeControlModule(Engine paramEngine, ViewGroup paramViewGroup) {
/*  42 */     m_engine = paramEngine;
/*  43 */     this.m_parent = paramViewGroup;
/*  44 */     m_layout = null;
/*  45 */     this.m_controls = new ArrayList<>();
/*     */   }
/*     */ 
/*     */   
/*     */   public void initContainer() {
/*  50 */     if (m_layout == null) {
/*     */       
/*  52 */       m_layout = new RelativeLayout(m_engine.getContext());
/*     */       
/*  54 */       this.m_parent.addView((View)m_layout, (ViewGroup.LayoutParams)new FrameLayout.LayoutParams(-1, -1));
/*     */ 
/*     */       
/*  57 */       this.m_parent.bringChildToFront((View)m_layout);
/*     */     } 
/*     */   }
/*     */ 
/*     */   
/*     */   public void addControl(Object paramObject) {
/*  63 */     NativeControl nativeControl = (NativeControl)paramObject;
/*     */ 
/*     */     
/*  66 */     m_layout.addView(nativeControl.getView(), (ViewGroup.LayoutParams)new RelativeLayout.LayoutParams(0, 0));
/*     */     
/*  68 */     this.m_controls.add(nativeControl);
/*     */   }
/*     */ 
/*     */   
/*     */   public void removeControl(Object paramObject) {
/*  73 */     NativeControl nativeControl = (NativeControl)paramObject;
/*     */     
/*  75 */     m_layout.removeView(nativeControl.getView());
/*     */     
/*  77 */     this.m_controls.remove(nativeControl);
/*     */   }
/*     */ 
/*     */   
/*     */   public void onPause() {
/*  82 */     for (NativeControl nativeControl : this.m_controls) {
/*  83 */       nativeControl.onPause();
/*     */     }
/*     */   }
/*     */   
/*     */   public void onResume() {
/*  88 */     for (NativeControl nativeControl : this.m_controls)
/*  89 */       nativeControl.onResume(); 
/*     */   } public Object createControl(String paramString) {
/*     */     Class<?> clazz;
/*     */     Constructor<?> constructor;
/*     */     NativeControl nativeControl;
/*  94 */     initContainer();
/*     */ 
/*     */ 
/*     */ 
/*     */     
/*     */     try {
/* 100 */       clazz = Class.forName(paramString);
/*     */     }
/* 102 */     catch (Exception exception) {
/*     */       
/* 104 */       return null;
/*     */     } 
/*     */ 
/*     */     
/* 108 */     if (clazz.getSuperclass() != NativeControl.class) {
/* 109 */       return null;
/*     */     }
/*     */ 
/*     */ 
/*     */     
/*     */     try {
/* 115 */       constructor = clazz.getDeclaredConstructor(new Class[] { NativeControlModule.class });
/*     */     }
/* 117 */     catch (Exception exception) {
/*     */       
/* 119 */       return null;
/*     */     } 
/*     */ 
/*     */ 
/*     */ 
/*     */     
/*     */     try {
/* 126 */       nativeControl = (NativeControl)constructor.newInstance(new Object[] { this });
/*     */     }
/* 128 */     catch (Exception exception) {
/*     */       
/* 130 */       return null;
/*     */     } 
/*     */ 
/*     */     
/* 134 */     return nativeControl;
/*     */   }
/*     */ 
/*     */   
/*     */   public static ViewGroup.LayoutParams createLayoutParams(int paramInt1, int paramInt2, int paramInt3, int paramInt4) {
/* 139 */     RelativeLayout.LayoutParams layoutParams = new RelativeLayout.LayoutParams(paramInt3 - paramInt1, paramInt4 - paramInt2);
/* 140 */     layoutParams.leftMargin = paramInt1;
/* 141 */     layoutParams.topMargin = paramInt2;
/* 142 */     layoutParams.addRule(9);
/* 143 */     layoutParams.addRule(10);
/* 144 */     return (ViewGroup.LayoutParams)layoutParams;
/*     */   }
/*     */ 
/*     */   
/*     */   public void setNativeControlRect(View paramView, int paramInt1, int paramInt2, int paramInt3, int paramInt4) {
/* 149 */     ViewGroup.LayoutParams layoutParams = createLayoutParams(paramInt1, paramInt2, paramInt3, paramInt4);
/* 150 */     View view = paramView;
/*     */     
/* 152 */     view.setLayoutParams(layoutParams);
/*     */   }
/*     */ 
/*     */   
/*     */   public static Engine getEngine() {
/* 157 */     return m_engine;
/*     */   }
/*     */ 
/*     */   
/*     */   public static Context getContext() {
/* 162 */     return m_engine.getContext();
/*     */   }
/*     */ 
/*     */   
/*     */   public static Activity getActivity() {
/* 167 */     return (Activity)getContext();
/*     */   }
/*     */ 
/*     */   
/*     */   public static RelativeLayout getNativeControlContainer() {
/* 172 */     return m_layout;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean handleBackPressed() {
/* 177 */     for (NativeControl nativeControl : this.m_controls) {
/*     */       
/* 179 */       if (nativeControl.handleBackPressed()) {
/* 180 */         return true;
/*     */       }
/*     */     } 
/* 183 */     return false;
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/nativecontrol/NativeControlModule.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */