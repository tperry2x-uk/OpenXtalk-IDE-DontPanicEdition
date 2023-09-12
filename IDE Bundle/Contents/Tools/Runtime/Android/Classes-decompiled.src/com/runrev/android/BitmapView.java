/*     */ package com.runrev.android;
/*     */ 
/*     */ import android.content.Context;
/*     */ import android.content.res.Resources;
/*     */ import android.graphics.Bitmap;
/*     */ import android.graphics.Canvas;
/*     */ import android.graphics.Paint;
/*     */ import android.graphics.Rect;
/*     */ import android.graphics.drawable.Drawable;
/*     */ import android.util.AttributeSet;
/*     */ import android.view.MotionEvent;
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
/*     */ public class BitmapView
/*     */   extends View
/*     */ {
/*     */   private Rect m_clip_bounds;
/*     */   private Paint m_dither_paint;
/*     */   private Bitmap m_bitmap;
/*     */   private boolean m_showing_splash;
/*     */   
/*     */   public BitmapView(Context paramContext) {
/*  38 */     super(paramContext);
/*  39 */     initialize();
/*     */   }
/*     */ 
/*     */   
/*     */   public BitmapView(Context paramContext, AttributeSet paramAttributeSet) {
/*  44 */     super(paramContext, paramAttributeSet);
/*  45 */     initialize();
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean onTouchEvent(MotionEvent paramMotionEvent) {
/*  53 */     if (this.m_showing_splash) {
/*  54 */       return true;
/*     */     }
/*  56 */     return false;
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   protected void onDraw(Canvas paramCanvas) {
/*  63 */     if (this.m_bitmap == null) {
/*     */       return;
/*     */     }
/*     */     
/*  67 */     if (!paramCanvas.getClipBounds(this.m_clip_bounds)) {
/*     */       return;
/*     */     }
/*     */     
/*  71 */     if (this.m_showing_splash) {
/*  72 */       drawSplashScreen(paramCanvas);
/*     */     } else {
/*  74 */       paramCanvas.drawBitmap(this.m_bitmap, 0.0F, 0.0F, this.m_dither_paint);
/*     */     } 
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   private void initialize() {
/*  82 */     this.m_clip_bounds = new Rect();
/*     */ 
/*     */     
/*  85 */     this.m_bitmap = null;
/*     */ 
/*     */     
/*  88 */     this.m_dither_paint = new Paint();
/*  89 */     this.m_dither_paint.setDither(true);
/*     */ 
/*     */     
/*  92 */     setDrawingCacheEnabled(false);
/*     */   }
/*     */ 
/*     */   
/*     */   public void resizeBitmap(int paramInt1, int paramInt2) {
/*  97 */     if (this.m_bitmap != null) {
/*     */       
/*  99 */       this.m_bitmap.recycle();
/* 100 */       this.m_bitmap = null;
/*     */     } 
/*     */     
/* 103 */     this.m_bitmap = Bitmap.createBitmap(paramInt1, paramInt2, Bitmap.Config.ARGB_8888);
/*     */   }
/*     */ 
/*     */   
/*     */   public Bitmap getBitmap() {
/* 108 */     return this.m_bitmap;
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public void showSplashScreen() {
/* 115 */     this.m_showing_splash = true;
/* 116 */     invalidate();
/*     */   }
/*     */ 
/*     */   
/*     */   public void hideSplashScreen() {
/* 121 */     if (!this.m_showing_splash) {
/*     */       return;
/*     */     }
/* 124 */     this.m_showing_splash = false;
/* 125 */     invalidate();
/*     */   }
/*     */ 
/*     */   
/*     */   public void drawSplashScreen(Canvas paramCanvas) {
/*     */     float f1, f2, f3, f4, f5, f6;
/* 131 */     int i = getWidth();
/* 132 */     int j = getHeight();
/*     */ 
/*     */ 
/*     */     
/* 136 */     if (i > j) {
/*     */       
/* 138 */       f1 = 0.5208333F;
/* 139 */       f4 = 0.33854166F;
/* 140 */       f2 = 0.46875F;
/* 141 */       f5 = 0.7552083F;
/* 142 */       f3 = 0.5729167F;
/* 143 */       f6 = 0.8984375F;
/*     */     }
/*     */     else {
/*     */       
/* 147 */       f1 = 0.5859375F;
/* 148 */       f4 = 0.375F;
/* 149 */       f2 = 0.3515625F;
/* 150 */       f5 = 0.80859375F;
/* 151 */       f3 = 0.4296875F;
/* 152 */       f6 = 0.91796875F;
/*     */     } 
/*     */ 
/*     */     
/* 156 */     String str = getContext().getPackageName();
/*     */     
/* 158 */     Resources resources = getContext().getResources();
/*     */     
/* 160 */     paramCanvas.drawRGB(255, 255, 255);
/*     */ 
/*     */     
/* 163 */     int k = resources.getIdentifier("drawable/splash_image", null, str);
/*     */     
/* 165 */     Drawable drawable1 = resources.getDrawable(k);
/*     */ 
/*     */     
/* 168 */     int m = resources.getIdentifier("drawable/splash_logo", null, str);
/*     */     
/* 170 */     Drawable drawable2 = resources.getDrawable(m);
/*     */ 
/*     */     
/* 173 */     int n = resources.getIdentifier("drawable/splash_text", null, str);
/*     */     
/* 175 */     Drawable drawable3 = resources.getDrawable(n);
/*     */ 
/*     */     
/* 178 */     int i3 = (int)(j * f1);
/* 179 */     int i4 = i3 * drawable1.getIntrinsicHeight() / drawable1.getIntrinsicWidth();
/* 180 */     int i1 = i / 2 - i3 / 2;
/* 181 */     int i2 = (int)(j * f4) - i4 / 2;
/* 182 */     drawable1.setBounds(i1, i2, i1 + i3, i2 + i4);
/* 183 */     drawable1.setDither(true);
/* 184 */     drawable1.draw(paramCanvas);
/*     */ 
/*     */     
/* 187 */     int i7 = (int)(j * f2);
/* 188 */     int i8 = i7 * drawable2.getIntrinsicHeight() / drawable2.getIntrinsicWidth();
/* 189 */     int i5 = i / 2 - i7 / 2;
/* 190 */     int i6 = (int)(j * f5) - i8 / 2;
/* 191 */     drawable2.setBounds(i5, i6, i5 + i7, i6 + i8);
/* 192 */     drawable2.setDither(true);
/* 193 */     drawable2.draw(paramCanvas);
/*     */ 
/*     */     
/* 196 */     int i11 = (int)(j * f3);
/* 197 */     int i12 = i11 * drawable3.getIntrinsicHeight() / drawable3.getIntrinsicWidth();
/* 198 */     int i9 = i / 2 - i11 / 2;
/* 199 */     int i10 = (int)(j * f6) - i12 / 2;
/* 200 */     drawable3.setBounds(i9, i10, i9 + i11, i10 + i12);
/* 201 */     drawable3.setDither(true);
/* 202 */     drawable3.draw(paramCanvas);
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/BitmapView.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */