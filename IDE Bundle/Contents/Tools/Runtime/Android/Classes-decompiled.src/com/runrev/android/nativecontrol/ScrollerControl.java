/*     */ package com.runrev.android.nativecontrol;
/*     */ 
/*     */ import android.content.Context;
/*     */ import android.graphics.Canvas;
/*     */ import android.view.MotionEvent;
/*     */ import android.view.View;
/*     */ import android.view.ViewGroup;
/*     */ import android.widget.FrameLayout;
/*     */ import android.widget.HorizontalScrollView;
/*     */ import android.widget.ScrollView;
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
/*     */ class ScrollerControl
/*     */   extends NativeControl
/*     */ {
/*     */   public static final String TAG = "revandroid.NativeScrollerControl";
/*     */   private View m_inner_hview;
/*     */   private View m_inner_vview;
/*     */   private ScrollView m_vscroll;
/*     */   private HorizontalScrollView m_hscroll;
/*     */   private boolean m_scrolling_enabled;
/*     */   private int m_left;
/*     */   private int m_top;
/*     */   private int m_width;
/*     */   private int m_height;
/*     */   private boolean m_dispatching;
/*     */   private int m_new_left;
/*     */   private int m_new_top;
/*     */   private boolean m_touch_canceled;
/*     */   private boolean m_dragging;
/*     */   private boolean m_tracking;
/*     */   
/*     */   public ScrollerControl(NativeControlModule paramNativeControlModule) {
/*  49 */     super(paramNativeControlModule);
/*     */     
/*  51 */     this.m_left = this.m_top = 0;
/*  52 */     this.m_new_left = this.m_new_top = 0;
/*  53 */     this.m_dispatching = false;
/*  54 */     this.m_dragging = false;
/*  55 */     this.m_tracking = false;
/*  56 */     this.m_touch_canceled = false;
/*     */     
/*  58 */     this.m_scrolling_enabled = true;
/*     */   }
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
/*     */   public View createView(Context paramContext) {
/*  75 */     this.m_vscroll = new ScrollView(paramContext)
/*     */       {
/*     */         public void onScrollChanged(int param1Int1, int param1Int2, int param1Int3, int param1Int4)
/*     */         {
/*  79 */           if (param1Int2 != param1Int4)
/*  80 */             ScrollerControl.this.updateScroll(ScrollerControl.this.m_dispatching ? ScrollerControl.this.m_new_left : ScrollerControl.this.m_left, param1Int2); 
/*  81 */           super.onScrollChanged(param1Int1, param1Int2, param1Int3, param1Int4);
/*     */         }
/*     */ 
/*     */ 
/*     */         
/*     */         public boolean onInterceptTouchEvent(MotionEvent param1MotionEvent) {
/*  87 */           return true;
/*     */         }
/*     */       };
/*  90 */     this.m_hscroll = new HorizontalScrollView(paramContext)
/*     */       {
/*     */         public void onScrollChanged(int param1Int1, int param1Int2, int param1Int3, int param1Int4)
/*     */         {
/*  94 */           if (param1Int1 != param1Int3)
/*  95 */             ScrollerControl.this.updateScroll(param1Int1, ScrollerControl.this.m_dispatching ? ScrollerControl.this.m_new_top : ScrollerControl.this.m_top); 
/*  96 */           super.onScrollChanged(param1Int1, param1Int2, param1Int3, param1Int4);
/*     */         }
/*     */ 
/*     */ 
/*     */         
/*     */         public boolean onInterceptTouchEvent(MotionEvent param1MotionEvent) {
/* 102 */           return true;
/*     */         }
/*     */       };
/*     */     
/* 106 */     this.m_inner_hview = new View(paramContext)
/*     */       {
/*     */         public boolean onTouchEvent(MotionEvent param1MotionEvent)
/*     */         {
/* 110 */           if (ScrollerControl.this.m_dragging) {
/* 111 */             return false;
/*     */           }
/* 113 */           if (3 == (param1MotionEvent.getAction() & 0xFF)) {
/* 114 */             ScrollerControl.this.m_touch_canceled = true;
/*     */           }
/* 116 */           return true;
/*     */         }
/*     */       };
/* 119 */     this.m_inner_vview = new View(paramContext)
/*     */       {
/*     */         public boolean onTouchEvent(MotionEvent param1MotionEvent)
/*     */         {
/* 123 */           if (ScrollerControl.this.m_dragging) {
/* 124 */             return false;
/*     */           }
/* 126 */           if (3 == (param1MotionEvent.getAction() & 0xFF)) {
/* 127 */             ScrollerControl.this.m_touch_canceled = true;
/*     */           }
/* 129 */           return true;
/*     */         }
/*     */       };
/*     */     
/* 133 */     this.m_hscroll.addView(this.m_inner_hview, (ViewGroup.LayoutParams)new FrameLayout.LayoutParams(-2, -1));
/* 134 */     this.m_vscroll.addView(this.m_inner_vview, (ViewGroup.LayoutParams)new FrameLayout.LayoutParams(-1, -2));
/*     */     
/* 136 */     FrameLayout frameLayout = new FrameLayout(paramContext)
/*     */       {
/*     */         
/*     */         public boolean dispatchTouchEvent(MotionEvent param1MotionEvent)
/*     */         {
/* 141 */           if (!ScrollerControl.this.m_scrolling_enabled) {
/*     */             
/* 143 */             NativeControlModule.getEngine().onTouchEvent(param1MotionEvent);
/* 144 */             return false;
/*     */           } 
/*     */           
/* 147 */           ScrollerControl.this.m_dispatching = true;
/* 148 */           ScrollerControl.this.m_touch_canceled = false;
/* 149 */           ScrollerControl.this.m_new_left = ScrollerControl.this.m_left;
/* 150 */           ScrollerControl.this.m_new_top = ScrollerControl.this.m_top;
/*     */           
/* 152 */           if ((param1MotionEvent.getAction() & 0xFF) == 0) {
/* 153 */             ScrollerControl.this.m_tracking = true;
/*     */           }
/* 155 */           boolean bool1 = ScrollerControl.this.m_hscroll.dispatchTouchEvent(MotionEvent.obtain(param1MotionEvent));
/* 156 */           boolean bool2 = ScrollerControl.this.m_vscroll.dispatchTouchEvent(MotionEvent.obtain(param1MotionEvent));
/*     */           
/* 158 */           ScrollerControl.this.m_dispatching = false;
/*     */           
/* 160 */           ScrollerControl.this.updateScroll(ScrollerControl.this.m_new_left, ScrollerControl.this.m_new_top);
/*     */           
/* 162 */           if (!ScrollerControl.this.m_dragging) {
/*     */             
/* 164 */             if (ScrollerControl.this.m_touch_canceled) {
/*     */               
/* 166 */               ScrollerControl.this.m_dragging = true;
/* 167 */               ScrollerControl.this.m_tracking = false;
/* 168 */               ScrollerControl.this.onScrollBeginDrag();
/* 169 */               param1MotionEvent.setAction(3);
/*     */             }
/*     */             else {
/*     */               
/* 173 */               param1MotionEvent.offsetLocation(getLeft(), getTop());
/*     */             } 
/* 175 */             NativeControlModule.getEngine().onTouchEvent(param1MotionEvent);
/*     */ 
/*     */           
/*     */           }
/* 179 */           else if ((param1MotionEvent.getAction() & 0xFF) == 1 || (param1MotionEvent
/* 180 */             .getAction() & 0xFF) == 3) {
/*     */             
/* 182 */             ScrollerControl.this.m_dragging = false;
/* 183 */             ScrollerControl.this.m_tracking = false;
/* 184 */             ScrollerControl.this.onScrollEndDrag();
/*     */           } 
/*     */ 
/*     */           
/* 188 */           return (bool1 || bool2);
/*     */         }
/*     */ 
/*     */ 
/*     */ 
/*     */         
/*     */         public void dispatchDraw(Canvas param1Canvas) {
/* 195 */           ScrollerControl.this.m_dispatching = true;
/* 196 */           ScrollerControl.this.m_new_left = ScrollerControl.this.m_left;
/* 197 */           ScrollerControl.this.m_new_top = ScrollerControl.this.m_top;
/* 198 */           super.dispatchDraw(param1Canvas);
/* 199 */           ScrollerControl.this.m_dispatching = false;
/* 200 */           ScrollerControl.this.updateScroll(ScrollerControl.this.m_new_left, ScrollerControl.this.m_new_top);
/*     */         }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */         
/*     */         public void requestDisallowInterceptTouchEvent(boolean param1Boolean) {}
/*     */       };
/* 209 */     frameLayout.addView((View)this.m_vscroll, (ViewGroup.LayoutParams)new FrameLayout.LayoutParams(-1, -1));
/* 210 */     frameLayout.addView((View)this.m_hscroll, (ViewGroup.LayoutParams)new FrameLayout.LayoutParams(-1, -1));
/* 211 */     return (View)frameLayout;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void setContentSize(int paramInt1, int paramInt2) {
/* 217 */     this.m_inner_hview.setMinimumWidth(paramInt1);
/* 218 */     this.m_inner_vview.setMinimumHeight(paramInt2);
/*     */     
/* 220 */     this.m_vscroll.updateViewLayout(this.m_inner_vview, (ViewGroup.LayoutParams)new FrameLayout.LayoutParams(paramInt1, paramInt2));
/* 221 */     this.m_hscroll.updateViewLayout(this.m_inner_hview, (ViewGroup.LayoutParams)new FrameLayout.LayoutParams(paramInt1, paramInt2));
/*     */   }
/*     */ 
/*     */   
/*     */   protected void updateScroll(int paramInt1, int paramInt2) {
/* 226 */     if (this.m_dispatching) {
/*     */       
/* 228 */       this.m_new_left = paramInt1;
/* 229 */       this.m_new_top = paramInt2;
/*     */ 
/*     */     
/*     */     }
/* 233 */     else if (this.m_left != paramInt1 || this.m_top != paramInt2) {
/*     */       
/* 235 */       this.m_left = paramInt1;
/* 236 */       this.m_top = paramInt2;
/* 237 */       onScrollChanged(this.m_left, this.m_top);
/*     */     } 
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   protected void onScrollChanged(int paramInt1, int paramInt2) {
/* 245 */     doScrollChanged(paramInt1, paramInt2);
/* 246 */     NativeControlModule.getEngine().wakeEngineThread();
/*     */   }
/*     */ 
/*     */   
/*     */   protected void onScrollBeginDrag() {
/* 251 */     doScrollBeginDrag();
/* 252 */     NativeControlModule.getEngine().wakeEngineThread();
/*     */   }
/*     */ 
/*     */   
/*     */   protected void onScrollEndDrag() {
/* 257 */     doScrollEndDrag();
/* 258 */     NativeControlModule.getEngine().wakeEngineThread();
/*     */   }
/*     */   
/* 261 */   public int getHScroll() { return this.m_left; } public int getVScroll() {
/* 262 */     return this.m_top;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void setHScroll(int paramInt) {
/* 268 */     this.m_left = paramInt;
/* 269 */     this.m_hscroll.scrollTo(paramInt, this.m_top);
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public void setVScroll(int paramInt) {
/* 276 */     this.m_top = paramInt;
/* 277 */     this.m_vscroll.scrollTo(this.m_left, paramInt);
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean getHorizontalIndicator() {
/* 282 */     return this.m_hscroll.isHorizontalScrollBarEnabled();
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean getVerticalIndicator() {
/* 287 */     return this.m_vscroll.isVerticalScrollBarEnabled();
/*     */   }
/*     */ 
/*     */   
/*     */   public void setHorizontalIndicator(boolean paramBoolean) {
/* 292 */     this.m_hscroll.setHorizontalScrollBarEnabled(paramBoolean);
/*     */   }
/*     */ 
/*     */   
/*     */   public void setVerticalIndicator(boolean paramBoolean) {
/* 297 */     this.m_vscroll.setVerticalScrollBarEnabled(paramBoolean);
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean getScrollingEnabled() {
/* 302 */     return this.m_scrolling_enabled;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void setScrollingEnabled(boolean paramBoolean) {
/* 308 */     this.m_scrolling_enabled = paramBoolean;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean isDragging() {
/* 313 */     return this.m_dragging;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean isTracking() {
/* 318 */     return this.m_tracking;
/*     */   }
/*     */   
/*     */   public native void doScrollChanged(int paramInt1, int paramInt2);
/*     */   
/*     */   public native void doScrollBeginDrag();
/*     */   
/*     */   public native void doScrollEndDrag();
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/nativecontrol/ScrollerControl.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */