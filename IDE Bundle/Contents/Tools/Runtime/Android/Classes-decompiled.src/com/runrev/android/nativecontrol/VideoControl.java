/*     */ package com.runrev.android.nativecontrol;
/*     */ 
/*     */ import android.content.Context;
/*     */ import android.content.res.AssetFileDescriptor;
/*     */ import android.media.MediaPlayer;
/*     */ import android.view.MotionEvent;
/*     */ import android.view.View;
/*     */ import android.view.ViewGroup;
/*     */ import android.widget.FrameLayout;
/*     */ import android.widget.MediaController;
/*     */ import java.io.FileDescriptor;
/*     */ import java.io.FileInputStream;
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
/*     */ public class VideoControl
/*     */   extends NativeControl
/*     */ {
/*     */   public static final int AVAILABLE_PROPERTY_DURATION = 1;
/*     */   public static final int AVAILABLE_PROPERTY_NATURALSIZE = 2;
/*     */   ExtVideoView m_video_view;
/*     */   MediaController m_video_controller;
/*     */   FrameLayout m_container;
/*     */   protected OnMovieTouchedListener m_on_movie_touched_listener;
/*     */   
/*     */   public VideoControl(NativeControlModule paramNativeControlModule) {
/*  40 */     super(paramNativeControlModule);
/*     */   }
/*     */ 
/*     */   
/*     */   public View createView(Context paramContext) {
/*  45 */     this.m_video_view = new ExtVideoView(paramContext);
/*     */     
/*  47 */     this.m_video_controller = new MediaController(paramContext)
/*     */       {
/*     */ 
/*     */         
/*     */         public void show(int param1Int)
/*     */         {
/*  53 */           super.show(0);
/*     */         }
/*     */       };
/*  56 */     this.m_video_view.setMediaController(this.m_video_controller);
/*     */     
/*  58 */     setOnCompletionListener(new MediaPlayer.OnCompletionListener()
/*     */         {
/*     */           public void onCompletion(MediaPlayer param1MediaPlayer)
/*     */           {
/*  62 */             VideoControl.this.doPlayerFinished();
/*  63 */             NativeControlModule.getEngine().wakeEngineThread();
/*     */           }
/*     */         });
/*     */     
/*  67 */     setOnErrorListener(new MediaPlayer.OnErrorListener()
/*     */         {
/*     */           public boolean onError(MediaPlayer param1MediaPlayer, int param1Int1, int param1Int2)
/*     */           {
/*  71 */             VideoControl.this.doPlayerError();
/*  72 */             NativeControlModule.getEngine().wakeEngineThread();
/*  73 */             return false;
/*     */           }
/*     */         });
/*     */     
/*  77 */     this.m_video_view.setOnPreparedListener(new MediaPlayer.OnPreparedListener()
/*     */         {
/*     */           public void onPrepared(MediaPlayer param1MediaPlayer)
/*     */           {
/*  81 */             VideoControl.this.doPropertyAvailable(1);
/*  82 */             NativeControlModule.getEngine().wakeEngineThread();
/*     */           }
/*     */         });
/*     */     
/*  86 */     this.m_video_view.setOnVideoSizeChangedListener(new MediaPlayer.OnVideoSizeChangedListener()
/*     */         {
/*     */           public void onVideoSizeChanged(MediaPlayer param1MediaPlayer, int param1Int1, int param1Int2)
/*     */           {
/*  90 */             VideoControl.this.doPropertyAvailable(2);
/*  91 */             NativeControlModule.getEngine().wakeEngineThread();
/*     */           }
/*     */         });
/*     */     
/*  95 */     this.m_video_view.setOnMovieTouchedListener(new ExtVideoView.OnMovieTouchedListener()
/*     */         {
/*     */           public void onMovieTouched()
/*     */           {
/*  99 */             VideoControl.this.doMovieTouched();
/*     */           }
/*     */         });
/*     */     
/* 103 */     this.m_container = new FrameLayout(paramContext)
/*     */       {
/*     */         public boolean onTouchEvent(MotionEvent param1MotionEvent)
/*     */         {
/* 107 */           if (param1MotionEvent.getActionMasked() == 0)
/* 108 */             VideoControl.this.dispatchMovieTouched(); 
/* 109 */           return true;
/*     */         }
/*     */       };
/*     */     
/* 113 */     this.m_container.setBackgroundColor(-16777216);
/* 114 */     this.m_container.addView((View)this.m_video_view, (ViewGroup.LayoutParams)new FrameLayout.LayoutParams(-1, -1, 17));
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 119 */     return (View)this.m_container;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean setUrl(String paramString) {
/* 124 */     this.m_video_view.setVideoPath(paramString);
/* 125 */     return true;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean setFile(String paramString, boolean paramBoolean) {
/*     */     try {
/* 132 */       FileDescriptor fileDescriptor = null;
/* 133 */       long l1 = 0L, l2 = 0L;
/* 134 */       if (paramBoolean)
/*     */       {
/* 136 */         AssetFileDescriptor assetFileDescriptor = this.m_video_view.getContext().getAssets().openFd(paramString);
/* 137 */         fileDescriptor = assetFileDescriptor.getFileDescriptor();
/* 138 */         l1 = assetFileDescriptor.getStartOffset();
/* 139 */         l2 = assetFileDescriptor.getLength();
/*     */         
/* 141 */         this.m_video_view.setVideoFileDescriptor(fileDescriptor, l1, l2);
/*     */       }
/*     */       else
/*     */       {
/* 145 */         FileInputStream fileInputStream = new FileInputStream(paramString);
/* 146 */         fileDescriptor = fileInputStream.getFD();
/*     */         
/* 148 */         this.m_video_view.setVideoFileDescriptor(fileDescriptor);
/*     */       }
/*     */     
/* 151 */     } catch (Exception exception) {
/*     */       
/* 153 */       return false;
/*     */     } 
/*     */     
/* 156 */     return true;
/*     */   }
/*     */ 
/*     */   
/*     */   public void setShowController(boolean paramBoolean) {
/* 161 */     if (paramBoolean) {
/*     */       
/* 163 */       this.m_video_view.setMediaController(this.m_video_controller);
/* 164 */       this.m_video_view.setControllerVisible(getVisible());
/*     */     } else {
/*     */       
/* 167 */       this.m_video_view.setMediaController((MediaController)null);
/*     */     } 
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void setVisible(boolean paramBoolean) {
/* 174 */     this.m_video_view.setControllerVisible(paramBoolean);
/* 175 */     super.setVisible(paramBoolean);
/*     */   }
/*     */ 
/*     */   
/*     */   public void setCurrentTime(int paramInt) {
/* 180 */     this.m_video_view.seekTo(paramInt);
/*     */   }
/*     */ 
/*     */   
/*     */   public void setLooping(boolean paramBoolean) {
/* 185 */     this.m_video_view.setLooping(paramBoolean);
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean getShowController() {
/* 190 */     return (this.m_video_view.getMediaController() != null);
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean getLooping() {
/* 195 */     return this.m_video_view.isLooping();
/*     */   }
/*     */ 
/*     */   
/*     */   public int getDuration() {
/* 200 */     return this.m_video_view.getDuration();
/*     */   }
/*     */ 
/*     */   
/*     */   public int getPlayableDuration() {
/* 205 */     return this.m_video_view.getPlayableDuration();
/*     */   }
/*     */ 
/*     */   
/*     */   public int getCurrentTime() {
/* 210 */     return this.m_video_view.getCurrentPosition();
/*     */   }
/*     */ 
/*     */   
/*     */   public int getVideoWidth() {
/* 215 */     return this.m_video_view.getVideoWidth();
/*     */   }
/*     */ 
/*     */   
/*     */   public int getVideoHeight() {
/* 220 */     return this.m_video_view.getVideoHeight();
/*     */   }
/*     */ 
/*     */   
/*     */   public void start() {
/* 225 */     this.m_video_view.start();
/*     */   }
/*     */ 
/*     */   
/*     */   public void stop() {
/* 230 */     this.m_video_view.stop();
/*     */   }
/*     */ 
/*     */   
/*     */   public void pause() {
/* 235 */     this.m_video_view.pause();
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void suspend() {
/* 241 */     this.m_video_view.suspend();
/*     */   }
/*     */ 
/*     */   
/*     */   public void resume() {
/* 246 */     this.m_video_view.resume();
/*     */   }
/*     */ 
/*     */   
/*     */   public void setOnCompletionListener(MediaPlayer.OnCompletionListener paramOnCompletionListener) {
/* 251 */     this.m_video_view.setOnCompletionListener(paramOnCompletionListener);
/*     */   }
/*     */ 
/*     */   
/*     */   public void setOnErrorListener(MediaPlayer.OnErrorListener paramOnErrorListener) {
/* 256 */     this.m_video_view.setOnErrorListener(paramOnErrorListener);
/*     */   }
/*     */ 
/*     */   
/*     */   public void setOnVideoSizeChangedListener(MediaPlayer.OnVideoSizeChangedListener paramOnVideoSizeChangedListener) {
/* 261 */     this.m_video_view.setOnVideoSizeChangedListener(paramOnVideoSizeChangedListener);
/*     */   }
/*     */ 
/*     */   
/*     */   public void setOnPreparedListener(MediaPlayer.OnPreparedListener paramOnPreparedListener) {
/* 266 */     this.m_video_view.setOnPreparedListener(paramOnPreparedListener);
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
/*     */   public void setOnMovieTouchedListener(OnMovieTouchedListener paramOnMovieTouchedListener) {
/* 280 */     this.m_on_movie_touched_listener = paramOnMovieTouchedListener;
/*     */   }
/*     */ 
/*     */   
/*     */   protected void dispatchMovieTouched() {
/* 285 */     if (this.m_on_movie_touched_listener != null)
/* 286 */       this.m_on_movie_touched_listener.onMovieTouched(); 
/*     */   }
/*     */   
/*     */   public native void doPlayerFinished();
/*     */   
/*     */   public native void doPlayerError();
/*     */   
/*     */   public native void doPropertyAvailable(int paramInt);
/*     */   
/*     */   public native void doMovieTouched();
/*     */   
/*     */   public static interface OnMovieTouchedListener {
/*     */     void onMovieTouched();
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/nativecontrol/VideoControl.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */