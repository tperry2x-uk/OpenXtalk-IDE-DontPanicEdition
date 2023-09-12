/*     */ package com.runrev.android;
/*     */ 
/*     */ import android.app.Activity;
/*     */ import android.content.Context;
/*     */ import android.content.Intent;
/*     */ import android.content.res.Configuration;
/*     */ import android.os.Bundle;
/*     */ import android.view.KeyEvent;
/*     */ import android.view.SurfaceView;
/*     */ import android.view.View;
/*     */ import android.view.ViewGroup;
/*     */ import android.view.ViewTreeObserver;
/*     */ import android.widget.FrameLayout;
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
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ public class LiveCodeActivity
/*     */   extends Activity
/*     */ {
/*     */   public static final String TAG = "revandroid.LiveCodeActivity";
/*     */   public static FrameLayout s_main_layout;
/*     */   public static Engine s_main_view;
/*     */   
/*     */   public Class getServiceClass() {
/*  48 */     return LiveCodeService.class;
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   protected void onCreate(Bundle paramBundle) {
/*  56 */     super.onCreate(paramBundle);
/*     */     
/*  58 */     s_main_layout = new FrameLayout((Context)this);
/*     */ 
/*     */ 
/*     */     
/*  62 */     s_main_view = new Engine((Context)this);
/*  63 */     Engine.doCreate(this, s_main_layout, s_main_view);
/*     */ 
/*     */     
/*  66 */     SurfaceView surfaceView = new SurfaceView((Context)this);
/*  67 */     s_main_layout.addView((View)surfaceView, (ViewGroup.LayoutParams)new FrameLayout.LayoutParams(0, 0));
/*     */ 
/*     */ 
/*     */     
/*  71 */     s_main_layout.addView(s_main_view, (ViewGroup.LayoutParams)new FrameLayout.LayoutParams(-1, -1));
/*     */ 
/*     */     
/*  74 */     setContentView((View)s_main_layout, new ViewGroup.LayoutParams(-1, -1));
/*     */ 
/*     */ 
/*     */ 
/*     */     
/*  79 */     getWindow().setSoftInputMode(16);
/*     */     
/*  81 */     s_main_layout.getRootView().getViewTreeObserver().addOnGlobalLayoutListener(new ViewTreeObserver.OnGlobalLayoutListener()
/*     */         {
/*     */           
/*     */           public void onGlobalLayout()
/*     */           {
/*  86 */             LiveCodeActivity.s_main_view.updateKeyboardVisible();
/*     */           }
/*     */         });
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   protected void onDestroy() {
/*  94 */     super.onDestroy();
/*  95 */     s_main_view.clearWakeUp();
/*  96 */     s_main_view.onDestroy();
/*  97 */     s_main_layout = null;
/*  98 */     s_main_view = null;
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   protected void onRestart() {
/* 106 */     super.onRestart();
/* 107 */     Engine.doRestart(s_main_view);
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   protected void onStart() {
/* 113 */     super.onStart();
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   protected void onResume() {
/* 119 */     super.onResume();
/* 120 */     s_main_view.onResume();
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   protected void onPause() {
/* 126 */     super.onPause();
/* 127 */     s_main_view.onPause();
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   protected void onStop() {
/* 133 */     super.onStop();
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   protected void onNewIntent(Intent paramIntent) {
/* 141 */     s_main_view.onNewIntent(paramIntent);
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public void onLowMemory() {
/* 149 */     super.onLowMemory();
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 155 */     Engine.doLowMemory();
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   protected void onSaveInstanceState(Bundle paramBundle) {}
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public void onConfigurationChanged(Configuration paramConfiguration) {
/* 168 */     super.onConfigurationChanged(paramConfiguration);
/* 169 */     s_main_view.onConfigurationChanged(paramConfiguration);
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public void onBackPressed() {
/* 177 */     s_main_view.onBackPressed();
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean onKeyDown(int paramInt, KeyEvent paramKeyEvent) {
/* 183 */     if (paramInt == 82 && paramKeyEvent.getRepeatCount() == 0) {
/*     */       
/* 185 */       s_main_view.onMenuKey();
/* 186 */       return true;
/*     */     } 
/* 188 */     if (paramInt == 84 && paramKeyEvent.getRepeatCount() == 0) {
/*     */       
/* 190 */       s_main_view.onSearchKey();
/* 191 */       return true;
/*     */     } 
/*     */     
/* 194 */     return super.onKeyDown(paramInt, paramKeyEvent);
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   static {
/* 201 */     System.loadLibrary("revandroid");
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   protected void onActivityResult(int paramInt1, int paramInt2, Intent paramIntent) {
/* 210 */     s_main_view.onActivityResult(paramInt1, paramInt2, paramIntent);
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public void onRequestPermissionsResult(int paramInt, String[] paramArrayOfString, int[] paramArrayOfint) {
/* 217 */     super.onRequestPermissionsResult(paramInt, paramArrayOfString, paramArrayOfint);
/* 218 */     s_main_view.onRequestPermissionsResult(paramInt, paramArrayOfString, paramArrayOfint);
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/LiveCodeActivity.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */