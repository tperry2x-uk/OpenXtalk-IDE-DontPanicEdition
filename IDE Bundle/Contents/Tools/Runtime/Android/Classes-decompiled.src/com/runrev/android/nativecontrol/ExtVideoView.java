/*     */ package com.runrev.android.nativecontrol;
/*     */ 
/*     */ import android.content.Context;
/*     */ import android.content.Intent;
/*     */ import android.media.MediaPlayer;
/*     */ import android.net.Uri;
/*     */ import android.util.AttributeSet;
/*     */ import android.util.Log;
/*     */ import android.view.KeyEvent;
/*     */ import android.view.MotionEvent;
/*     */ import android.view.SurfaceHolder;
/*     */ import android.view.SurfaceView;
/*     */ import android.view.View;
/*     */ import android.widget.MediaController;
/*     */ import java.io.FileDescriptor;
/*     */ import java.io.IOException;
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
/*     */ public class ExtVideoView
/*     */   extends SurfaceView
/*     */   implements MediaController.MediaPlayerControl
/*     */ {
/*  71 */   private String TAG = "revandroid.ExtVideoView";
/*     */   
/*     */   private FileDescriptor mFileDescriptor;
/*     */   
/*     */   private boolean mFdWithOffset;
/*     */   
/*     */   private long mFdOffset;
/*     */   
/*     */   private long mFdLength;
/*     */   
/*     */   private Uri mUri;
/*     */   
/*     */   private int mDuration;
/*     */   
/*     */   private static final int STATE_ERROR = -1;
/*     */   
/*     */   private static final int STATE_IDLE = 0;
/*     */   
/*     */   private static final int STATE_PREPARING = 1;
/*     */   private static final int STATE_PREPARED = 2;
/*     */   private static final int STATE_PLAYING = 3;
/*     */   private static final int STATE_PAUSED = 4;
/*     */   private static final int STATE_PLAYBACK_COMPLETED = 5;
/*     */   private static final int STATE_SUSPEND = 6;
/*     */   private static final int STATE_RESUME = 7;
/*     */   private static final int STATE_SUSPEND_UNSUPPORTED = 8;
/*  97 */   private int mCurrentState = 0;
/*  98 */   private int mTargetState = 0;
/*     */ 
/*     */   
/* 101 */   private SurfaceHolder mSurfaceHolder = null;
/* 102 */   private MediaPlayer mMediaPlayer = null; private int mVideoWidth; private int mVideoHeight; private int mSurfaceWidth; private int mSurfaceHeight; private MediaController mMediaController; private MediaPlayer.OnCompletionListener mOnCompletionListener; private MediaPlayer.OnPreparedListener mOnPreparedListener;
/*     */   private MediaPlayer.OnVideoSizeChangedListener mOnVideoSizeChangedListener;
/*     */   private int mCurrentBufferPercentage;
/*     */   private MediaPlayer.OnErrorListener mOnErrorListener;
/*     */   private int mSeekWhenPrepared;
/*     */   private boolean mCanPause;
/*     */   private boolean mCanSeekBack;
/*     */   private boolean mCanSeekForward;
/*     */   private int mStateWhenSuspended;
/*     */   private boolean mLooping;
/*     */   MediaPlayer.OnVideoSizeChangedListener mSizeChangedListener;
/*     */   MediaPlayer.OnInfoListener mInfoListener;
/*     */   MediaPlayer.OnPreparedListener mPreparedListener;
/*     */   private MediaPlayer.OnCompletionListener mCompletionListener;
/*     */   private MediaPlayer.OnErrorListener mErrorListener;
/*     */   private MediaPlayer.OnBufferingUpdateListener mBufferingUpdateListener;
/*     */   protected OnMovieTouchedListener mOnMovieTouchedListener;
/*     */   SurfaceHolder.Callback mSHCallback;
/*     */   
/* 121 */   public ExtVideoView(Context paramContext) { super(paramContext);
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
/* 353 */     this.mSizeChangedListener = new MediaPlayer.OnVideoSizeChangedListener()
/*     */       {
/*     */         public void onVideoSizeChanged(MediaPlayer param1MediaPlayer, int param1Int1, int param1Int2) {
/* 356 */           ExtVideoView.this.mVideoWidth = param1MediaPlayer.getVideoWidth();
/* 357 */           ExtVideoView.this.mVideoHeight = param1MediaPlayer.getVideoHeight();
/* 358 */           if (ExtVideoView.this.mVideoWidth != 0 && ExtVideoView.this.mVideoHeight != 0) {
/* 359 */             ExtVideoView.this.getHolder().setFixedSize(ExtVideoView.this.mVideoWidth, ExtVideoView.this.mVideoHeight);
/*     */           }
/* 361 */           if (ExtVideoView.this.mOnVideoSizeChangedListener != null) {
/* 362 */             ExtVideoView.this.mOnVideoSizeChangedListener.onVideoSizeChanged(param1MediaPlayer, param1Int1, param1Int2);
/*     */           }
/*     */         }
/*     */       };
/* 366 */     this.mInfoListener = new MediaPlayer.OnInfoListener() {
/*     */         public boolean onInfo(MediaPlayer param1MediaPlayer, int param1Int1, int param1Int2) {
/* 368 */           if (param1Int1 == 801) {
/*     */             
/* 370 */             ExtVideoView.this.mCanSeekBack = false;
/* 371 */             ExtVideoView.this.mCanSeekForward = false;
/*     */           } 
/*     */           
/* 374 */           return true;
/*     */         }
/*     */       };
/*     */     
/* 378 */     this.mPreparedListener = new MediaPlayer.OnPreparedListener() {
/*     */         public void onPrepared(MediaPlayer param1MediaPlayer) {
/* 380 */           ExtVideoView.this.mCurrentState = 2;
/*     */           
/* 382 */           ExtVideoView.this.mCanPause = true;
/* 383 */           ExtVideoView.this.mCanSeekBack = true;
/* 384 */           ExtVideoView.this.mCanSeekForward = true;
/*     */           
/* 386 */           if (ExtVideoView.this.mOnPreparedListener != null) {
/* 387 */             ExtVideoView.this.mOnPreparedListener.onPrepared(ExtVideoView.this.mMediaPlayer);
/*     */           }
/* 389 */           if (ExtVideoView.this.mMediaController != null) {
/* 390 */             ExtVideoView.this.mMediaController.setEnabled(true);
/*     */ 
/*     */             
/* 393 */             if (ExtVideoView.this.isInPlaybackState()) {
/* 394 */               ExtVideoView.this.mMediaController.show(0);
/*     */             }
/*     */           } 
/*     */           
/* 398 */           ExtVideoView.this.mVideoWidth = param1MediaPlayer.getVideoWidth();
/* 399 */           ExtVideoView.this.mVideoHeight = param1MediaPlayer.getVideoHeight();
/*     */           
/* 401 */           int i = ExtVideoView.this.mSeekWhenPrepared;
/* 402 */           ExtVideoView.this.seekTo(i);
/*     */ 
/*     */ 
/*     */ 
/*     */           
/* 407 */           if (ExtVideoView.this.mVideoWidth != 0 && ExtVideoView.this.mVideoHeight != 0) {
/*     */             
/* 409 */             ExtVideoView.this.getHolder().setFixedSize(ExtVideoView.this.mVideoWidth, ExtVideoView.this.mVideoHeight);
/* 410 */             if (ExtVideoView.this.mSurfaceWidth == ExtVideoView.this.mVideoWidth && ExtVideoView.this.mSurfaceHeight == ExtVideoView.this.mVideoHeight)
/*     */             {
/*     */ 
/*     */               
/* 414 */               if (ExtVideoView.this.mTargetState == 3) {
/* 415 */                 ExtVideoView.this.start();
/* 416 */               } else if (!ExtVideoView.this.isPlaying() && (i != 0 || ExtVideoView.this
/* 417 */                 .getCurrentPosition() > 0) && 
/* 418 */                 ExtVideoView.this.mMediaController != null) {
/*     */                 
/* 420 */                 ExtVideoView.this.mMediaController.show(0);
/*     */               
/*     */               }
/*     */ 
/*     */             
/*     */             }
/*     */           }
/* 427 */           else if (ExtVideoView.this.mTargetState == 3) {
/* 428 */             ExtVideoView.this.start();
/*     */           } 
/*     */         }
/*     */       };
/*     */ 
/*     */     
/* 434 */     this.mCompletionListener = new MediaPlayer.OnCompletionListener()
/*     */       {
/*     */         public void onCompletion(MediaPlayer param1MediaPlayer) {
/* 437 */           ExtVideoView.this.mCurrentState = 5;
/* 438 */           ExtVideoView.this.mTargetState = 5;
/* 439 */           if (ExtVideoView.this.mMediaController != null) {
/* 440 */             ExtVideoView.this.mMediaController.hide();
/*     */           }
/* 442 */           if (ExtVideoView.this.mOnCompletionListener != null) {
/* 443 */             ExtVideoView.this.mOnCompletionListener.onCompletion(ExtVideoView.this.mMediaPlayer);
/*     */           }
/*     */         }
/*     */       };
/*     */     
/* 448 */     this.mErrorListener = new MediaPlayer.OnErrorListener()
/*     */       {
/*     */         public boolean onError(MediaPlayer param1MediaPlayer, int param1Int1, int param1Int2) {
/* 451 */           Log.d(ExtVideoView.this.TAG, "Error: " + param1Int1 + "," + param1Int2);
/* 452 */           ExtVideoView.this.mCurrentState = -1;
/* 453 */           ExtVideoView.this.mTargetState = -1;
/* 454 */           if (ExtVideoView.this.mMediaController != null) {
/* 455 */             ExtVideoView.this.mMediaController.hide();
/*     */           }
/*     */ 
/*     */           
/* 459 */           if (ExtVideoView.this.mOnErrorListener != null && 
/* 460 */             ExtVideoView.this.mOnErrorListener.onError(ExtVideoView.this.mMediaPlayer, param1Int1, param1Int2)) {
/* 461 */             return true;
/*     */           }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */           
/* 468 */           if (ExtVideoView.this.mOnCompletionListener != null) {
/* 469 */             ExtVideoView.this.mOnCompletionListener.onCompletion(ExtVideoView.this.mMediaPlayer);
/*     */           }
/* 471 */           return true;
/*     */         }
/*     */       };
/*     */     
/* 475 */     this.mBufferingUpdateListener = new MediaPlayer.OnBufferingUpdateListener()
/*     */       {
/*     */         public void onBufferingUpdate(MediaPlayer param1MediaPlayer, int param1Int) {
/* 478 */           if (ExtVideoView.this.isInPlaybackState())
/*     */           {
/* 480 */             ExtVideoView.this.mCurrentBufferPercentage = param1Int;
/*     */           }
/*     */         }
/*     */       };
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
/* 546 */     this.mSHCallback = new SurfaceHolder.Callback()
/*     */       {
/*     */         
/*     */         public void surfaceChanged(SurfaceHolder param1SurfaceHolder, int param1Int1, int param1Int2, int param1Int3)
/*     */         {
/* 551 */           ExtVideoView.this.mSurfaceWidth = param1Int2;
/* 552 */           ExtVideoView.this.mSurfaceHeight = param1Int3;
/* 553 */           boolean bool1 = (ExtVideoView.this.mTargetState == 3) ? true : false;
/* 554 */           boolean bool2 = (ExtVideoView.this.mVideoWidth == param1Int2 && ExtVideoView.this.mVideoHeight == param1Int3) ? true : false;
/* 555 */           if (ExtVideoView.this.mMediaPlayer != null && bool1 && bool2) {
/* 556 */             if (ExtVideoView.this.mSeekWhenPrepared != 0) {
/* 557 */               ExtVideoView.this.seekTo(ExtVideoView.this.mSeekWhenPrepared);
/*     */             }
/* 559 */             ExtVideoView.this.start();
/*     */           } 
/*     */         }
/*     */ 
/*     */         
/*     */         public void surfaceCreated(SurfaceHolder param1SurfaceHolder) {
/* 565 */           ExtVideoView.this.mSurfaceHolder = param1SurfaceHolder;
/*     */           
/* 567 */           if (ExtVideoView.this.mMediaPlayer != null && ExtVideoView.this.mCurrentState == 6 && ExtVideoView.this
/* 568 */             .mTargetState == 7) {
/* 569 */             ExtVideoView.this.mMediaPlayer.setDisplay(ExtVideoView.this.mSurfaceHolder);
/* 570 */             ExtVideoView.this.resume();
/*     */           } else {
/* 572 */             ExtVideoView.this.openVideo();
/*     */           } 
/*     */         }
/*     */ 
/*     */         
/*     */         public void surfaceDestroyed(SurfaceHolder param1SurfaceHolder)
/*     */         {
/* 579 */           ExtVideoView.this.mSurfaceHolder = null;
/* 580 */           if (ExtVideoView.this.mMediaController != null) ExtVideoView.this.mMediaController.hide(); 
/* 581 */           if (ExtVideoView.this.mCurrentState != 6)
/* 582 */             ExtVideoView.this.release(true);  } }; initVideoView(); } public ExtVideoView(Context paramContext, AttributeSet paramAttributeSet) { this(paramContext, paramAttributeSet, 0); initVideoView(); } public ExtVideoView(Context paramContext, AttributeSet paramAttributeSet, int paramInt) { super(paramContext, paramAttributeSet, paramInt); this.mSizeChangedListener = new MediaPlayer.OnVideoSizeChangedListener() { public void onVideoSizeChanged(MediaPlayer param1MediaPlayer, int param1Int1, int param1Int2) { ExtVideoView.this.mVideoWidth = param1MediaPlayer.getVideoWidth(); ExtVideoView.this.mVideoHeight = param1MediaPlayer.getVideoHeight(); if (ExtVideoView.this.mVideoWidth != 0 && ExtVideoView.this.mVideoHeight != 0) ExtVideoView.this.getHolder().setFixedSize(ExtVideoView.this.mVideoWidth, ExtVideoView.this.mVideoHeight);  if (ExtVideoView.this.mOnVideoSizeChangedListener != null) ExtVideoView.this.mOnVideoSizeChangedListener.onVideoSizeChanged(param1MediaPlayer, param1Int1, param1Int2);  } }; this.mInfoListener = new MediaPlayer.OnInfoListener() { public boolean onInfo(MediaPlayer param1MediaPlayer, int param1Int1, int param1Int2) { if (param1Int1 == 801) { ExtVideoView.this.mCanSeekBack = false; ExtVideoView.this.mCanSeekForward = false; }  return true; } }; this.mPreparedListener = new MediaPlayer.OnPreparedListener() { public void onPrepared(MediaPlayer param1MediaPlayer) { ExtVideoView.this.mCurrentState = 2; ExtVideoView.this.mCanPause = true; ExtVideoView.this.mCanSeekBack = true; ExtVideoView.this.mCanSeekForward = true; if (ExtVideoView.this.mOnPreparedListener != null) ExtVideoView.this.mOnPreparedListener.onPrepared(ExtVideoView.this.mMediaPlayer);  if (ExtVideoView.this.mMediaController != null) { ExtVideoView.this.mMediaController.setEnabled(true); if (ExtVideoView.this.isInPlaybackState()) ExtVideoView.this.mMediaController.show(0);  }  ExtVideoView.this.mVideoWidth = param1MediaPlayer.getVideoWidth(); ExtVideoView.this.mVideoHeight = param1MediaPlayer.getVideoHeight(); int i = ExtVideoView.this.mSeekWhenPrepared; ExtVideoView.this.seekTo(i); if (ExtVideoView.this.mVideoWidth != 0 && ExtVideoView.this.mVideoHeight != 0) { ExtVideoView.this.getHolder().setFixedSize(ExtVideoView.this.mVideoWidth, ExtVideoView.this.mVideoHeight); if (ExtVideoView.this.mSurfaceWidth == ExtVideoView.this.mVideoWidth && ExtVideoView.this.mSurfaceHeight == ExtVideoView.this.mVideoHeight) if (ExtVideoView.this.mTargetState == 3) { ExtVideoView.this.start(); } else if (!ExtVideoView.this.isPlaying() && (i != 0 || ExtVideoView.this.getCurrentPosition() > 0) && ExtVideoView.this.mMediaController != null) { ExtVideoView.this.mMediaController.show(0); }   } else if (ExtVideoView.this.mTargetState == 3) { ExtVideoView.this.start(); }  } }; this.mCompletionListener = new MediaPlayer.OnCompletionListener() { public void onCompletion(MediaPlayer param1MediaPlayer) { ExtVideoView.this.mCurrentState = 5; ExtVideoView.this.mTargetState = 5; if (ExtVideoView.this.mMediaController != null) ExtVideoView.this.mMediaController.hide();  if (ExtVideoView.this.mOnCompletionListener != null) ExtVideoView.this.mOnCompletionListener.onCompletion(ExtVideoView.this.mMediaPlayer);  } }; this.mErrorListener = new MediaPlayer.OnErrorListener() { public boolean onError(MediaPlayer param1MediaPlayer, int param1Int1, int param1Int2) { Log.d(ExtVideoView.this.TAG, "Error: " + param1Int1 + "," + param1Int2); ExtVideoView.this.mCurrentState = -1; ExtVideoView.this.mTargetState = -1; if (ExtVideoView.this.mMediaController != null) ExtVideoView.this.mMediaController.hide();  if (ExtVideoView.this.mOnErrorListener != null && ExtVideoView.this.mOnErrorListener.onError(ExtVideoView.this.mMediaPlayer, param1Int1, param1Int2)) return true;  if (ExtVideoView.this.mOnCompletionListener != null) ExtVideoView.this.mOnCompletionListener.onCompletion(ExtVideoView.this.mMediaPlayer);  return true; } }; this.mBufferingUpdateListener = new MediaPlayer.OnBufferingUpdateListener() { public void onBufferingUpdate(MediaPlayer param1MediaPlayer, int param1Int) { if (ExtVideoView.this.isInPlaybackState()) ExtVideoView.this.mCurrentBufferPercentage = param1Int;  } }; this.mSHCallback = new SurfaceHolder.Callback() { public void surfaceChanged(SurfaceHolder param1SurfaceHolder, int param1Int1, int param1Int2, int param1Int3) { ExtVideoView.this.mSurfaceWidth = param1Int2; ExtVideoView.this.mSurfaceHeight = param1Int3; boolean bool1 = (ExtVideoView.this.mTargetState == 3) ? true : false; boolean bool2 = (ExtVideoView.this.mVideoWidth == param1Int2 && ExtVideoView.this.mVideoHeight == param1Int3) ? true : false; if (ExtVideoView.this.mMediaPlayer != null && bool1 && bool2) { if (ExtVideoView.this.mSeekWhenPrepared != 0) ExtVideoView.this.seekTo(ExtVideoView.this.mSeekWhenPrepared);  ExtVideoView.this.start(); }  } public void surfaceCreated(SurfaceHolder param1SurfaceHolder) { ExtVideoView.this.mSurfaceHolder = param1SurfaceHolder; if (ExtVideoView.this.mMediaPlayer != null && ExtVideoView.this.mCurrentState == 6 && ExtVideoView.this.mTargetState == 7) { ExtVideoView.this.mMediaPlayer.setDisplay(ExtVideoView.this.mSurfaceHolder); ExtVideoView.this.resume(); } else { ExtVideoView.this.openVideo(); }  } public void surfaceDestroyed(SurfaceHolder param1SurfaceHolder) { ExtVideoView.this.mSurfaceHolder = null; if (ExtVideoView.this.mMediaController != null) ExtVideoView.this.mMediaController.hide();  if (ExtVideoView.this.mCurrentState != 6) ExtVideoView.this.release(true);  } }; initVideoView(); }
/*     */   protected void onMeasure(int paramInt1, int paramInt2) { Log.i(this.TAG, "onMeasure"); int i = getDefaultSize(this.mVideoWidth, paramInt1); int j = getDefaultSize(this.mVideoHeight, paramInt2); if (this.mVideoWidth > 0 && this.mVideoHeight > 0)
/*     */       if (this.mVideoWidth * j > i * this.mVideoHeight) { Log.i(this.TAG, "image too tall, correcting"); j = i * this.mVideoHeight / this.mVideoWidth; } else if (this.mVideoWidth * j < i * this.mVideoHeight) { Log.i(this.TAG, "image too wide, correcting"); i = j * this.mVideoWidth / this.mVideoHeight; } else { Log.i(this.TAG, "aspect ratio is correct: " + i + "/" + j + "=" + this.mVideoWidth + "/" + this.mVideoHeight); }   Log.i(this.TAG, "setting size: " + i + 'x' + j); setMeasuredDimension(i, j); }
/*     */   public int resolveAdjustedSize(int paramInt1, int paramInt2) { int i = paramInt1; int j = View.MeasureSpec.getMode(paramInt2); int k = View.MeasureSpec.getSize(paramInt2); switch (j) { case 0: i = paramInt1; break;
/*     */       case -2147483648: i = Math.min(paramInt1, k); break;
/*     */       case 1073741824:
/*     */         i = k; break; }  return i; }
/*     */   private void initVideoView() { this.mVideoWidth = 0; this.mVideoHeight = 0; getHolder().addCallback(this.mSHCallback); getHolder().setType(3); setZOrderMediaOverlay(true); setFocusable(true); setFocusableInTouchMode(true); requestFocus(); this.mCurrentState = 0; this.mTargetState = 0; this.mLooping = false; }
/*     */   public void setVideoPath(String paramString) { setVideoURI(Uri.parse(paramString)); }
/* 591 */   public void setVideoFileDescriptor(FileDescriptor paramFileDescriptor, long paramLong1, long paramLong2) { this.mFileDescriptor = paramFileDescriptor; this.mFdWithOffset = true; this.mFdOffset = paramLong1; this.mFdLength = paramLong2; this.mUri = null; videoSourceSet(); } private void release(boolean paramBoolean) { if (this.mMediaPlayer != null)
/* 592 */     { this.mMediaPlayer.reset();
/* 593 */       this.mMediaPlayer.release();
/* 594 */       this.mMediaPlayer = null;
/* 595 */       this.mCurrentState = 0;
/* 596 */       if (paramBoolean)
/* 597 */         this.mTargetState = 0;  }  }
/*     */   public void setVideoFileDescriptor(FileDescriptor paramFileDescriptor) { this.mFileDescriptor = paramFileDescriptor; this.mFdWithOffset = false; this.mUri = null; videoSourceSet(); }
/*     */   public void setVideoURI(Uri paramUri) { this.mFileDescriptor = null; this.mUri = paramUri; videoSourceSet(); }
/*     */   private void videoSourceSet() { this.mSeekWhenPrepared = 0; openVideo(); requestLayout(); invalidate(); }
/*     */   public void stopPlayback() { if (this.mMediaPlayer != null) { this.mMediaPlayer.stop(); this.mMediaPlayer.release(); this.mMediaPlayer = null; this.mCurrentState = 0; this.mTargetState = 0; }  }
/*     */   private void openVideo() { if ((this.mUri == null && this.mFileDescriptor == null) || this.mSurfaceHolder == null) return;  Intent intent = new Intent("com.android.music.musicservicecommand"); intent.putExtra("command", "pause"); getContext().sendBroadcast(intent); release(false); try { this.mMediaPlayer = new MediaPlayer(); this.mMediaPlayer.setOnPreparedListener(this.mPreparedListener); this.mMediaPlayer.setOnVideoSizeChangedListener(this.mSizeChangedListener); this.mDuration = -1; this.mMediaPlayer.setOnCompletionListener(this.mCompletionListener); this.mMediaPlayer.setOnInfoListener(this.mInfoListener); this.mMediaPlayer.setOnErrorListener(this.mErrorListener); this.mMediaPlayer.setOnBufferingUpdateListener(this.mBufferingUpdateListener); this.mCurrentBufferPercentage = 0; if (this.mUri != null) { this.mMediaPlayer.setDataSource(getContext(), this.mUri); } else if (this.mFdWithOffset) { this.mMediaPlayer.setDataSource(this.mFileDescriptor, this.mFdOffset, this.mFdLength); } else { this.mMediaPlayer.setDataSource(this.mFileDescriptor); }  this.mMediaPlayer.setDisplay(this.mSurfaceHolder); this.mMediaPlayer.setAudioStreamType(3); this.mMediaPlayer.setScreenOnWhilePlaying(true); if (this.mLooping) this.mMediaPlayer.setLooping(true);  this.mMediaPlayer.prepareAsync(); this.mCurrentState = 1; attachMediaController(); } catch (IOException iOException) { Log.w(this.TAG, "Unable to open content: " + this.mUri, iOException); this.mCurrentState = -1; this.mTargetState = -1; this.mErrorListener.onError(this.mMediaPlayer, 1, 0); return; } catch (IllegalArgumentException illegalArgumentException) { Log.w(this.TAG, "Unable to open content: " + this.mUri, illegalArgumentException); this.mCurrentState = -1; this.mTargetState = -1; this.mErrorListener.onError(this.mMediaPlayer, 1, 0); return; } catch (IllegalStateException illegalStateException) { Log.w(this.TAG, "Unable to open content: " + this.mUri, illegalStateException); this.mCurrentState = -1; this.mTargetState = -1; this.mErrorListener.onError(this.mMediaPlayer, 1, 0); return; }  }
/*     */   public void setControllerVisible(boolean paramBoolean) { if (this.mMediaController != null) if (paramBoolean) { this.mMediaController.show(0); } else { this.mMediaController.hide(); }   }
/* 604 */   public void setMediaController(MediaController paramMediaController) { if (this.mMediaController != null) this.mMediaController.hide();  this.mMediaController = paramMediaController; attachMediaController(); } public MediaController getMediaController() { return this.mMediaController; } private void attachMediaController() { if (this.mMediaPlayer != null && this.mMediaController != null) { this.mMediaController.setMediaPlayer(this); View view = (View)((getParent() instanceof View) ? getParent() : this); this.mMediaController.setAnchorView(view); this.mMediaController.setEnabled(isInPlaybackState()); if (isInPlaybackState()) this.mMediaController.show(0);  }  } public void setOnPreparedListener(MediaPlayer.OnPreparedListener paramOnPreparedListener) { this.mOnPreparedListener = paramOnPreparedListener; } public void setOnCompletionListener(MediaPlayer.OnCompletionListener paramOnCompletionListener) { this.mOnCompletionListener = paramOnCompletionListener; } public void setOnErrorListener(MediaPlayer.OnErrorListener paramOnErrorListener) { this.mOnErrorListener = paramOnErrorListener; } public void setOnVideoSizeChangedListener(MediaPlayer.OnVideoSizeChangedListener paramOnVideoSizeChangedListener) { this.mOnVideoSizeChangedListener = paramOnVideoSizeChangedListener; } public void setOnMovieTouchedListener(OnMovieTouchedListener paramOnMovieTouchedListener) { this.mOnMovieTouchedListener = paramOnMovieTouchedListener; } protected void dispatchMovieTouched() { if (this.mOnMovieTouchedListener != null) this.mOnMovieTouchedListener.onMovieTouched();  } public boolean onTouchEvent(MotionEvent paramMotionEvent) { if (isInPlaybackState() && this.mMediaController != null && 0 == (paramMotionEvent
/* 605 */       .getAction() & 0xFF)) {
/* 606 */       toggleMediaControlsVisiblity();
/* 607 */       return true;
/*     */     } 
/*     */     
/* 610 */     if (paramMotionEvent.getActionMasked() == 0) {
/*     */       
/* 612 */       dispatchMovieTouched();
/* 613 */       return true;
/*     */     } 
/*     */     
/* 616 */     return false; }
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean onTrackballEvent(MotionEvent paramMotionEvent) {
/* 621 */     if (isInPlaybackState() && this.mMediaController != null) {
/* 622 */       toggleMediaControlsVisiblity();
/*     */     }
/* 624 */     return false;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean onKeyDown(int paramInt, KeyEvent paramKeyEvent) {
/* 630 */     boolean bool = (paramInt != 4 && paramInt != 24 && paramInt != 25 && paramInt != 82 && paramInt != 5 && paramInt != 6) ? true : false;
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 636 */     if (isInPlaybackState() && bool && this.mMediaController != null) {
/* 637 */       if (paramInt == 79 || paramInt == 85) {
/*     */         
/* 639 */         if (this.mMediaPlayer.isPlaying()) {
/* 640 */           pause();
/* 641 */           this.mMediaController.show(0);
/*     */         } else {
/* 643 */           start();
/* 644 */           this.mMediaController.hide();
/*     */         } 
/* 646 */         return true;
/* 647 */       }  if (paramInt == 86 && this.mMediaPlayer
/* 648 */         .isPlaying()) {
/* 649 */         pause();
/* 650 */         this.mMediaController.show(0);
/*     */       } else {
/* 652 */         toggleMediaControlsVisiblity();
/*     */       } 
/*     */     } 
/*     */     
/* 656 */     return super.onKeyDown(paramInt, paramKeyEvent);
/*     */   }
/*     */   
/*     */   private void toggleMediaControlsVisiblity() {
/* 660 */     Log.i(this.TAG, "toggleMediaControlsVisibility");
/* 661 */     if (this.mMediaController.isShowing()) {
/* 662 */       this.mMediaController.hide();
/*     */     } else {
/* 664 */       this.mMediaController.show(0);
/*     */     } 
/*     */   }
/*     */   
/*     */   public void start() {
/* 669 */     if (isInPlaybackState()) {
/* 670 */       this.mMediaPlayer.start();
/* 671 */       this.mCurrentState = 3;
/*     */     } 
/* 673 */     this.mTargetState = 3;
/*     */ 
/*     */ 
/*     */     
/* 677 */     if (this.mMediaController != null) {
/* 678 */       this.mMediaController.show(0);
/*     */     }
/*     */   }
/*     */   
/*     */   public void stop() {
/* 683 */     stopPlayback();
/* 684 */     openVideo();
/*     */   }
/*     */   
/*     */   public void pause() {
/* 688 */     if (isInPlaybackState() && 
/* 689 */       this.mMediaPlayer.isPlaying()) {
/* 690 */       this.mMediaPlayer.pause();
/* 691 */       this.mCurrentState = 4;
/*     */     } 
/*     */     
/* 694 */     this.mTargetState = 4;
/*     */   }
/*     */   
/*     */   public void suspend() {
/* 698 */     if (isInPlaybackState()) {
/* 699 */       release(false);
/* 700 */       this.mCurrentState = 8;
/* 701 */       Log.w(this.TAG, "Unable to suspend video. Release MediaPlayer.");
/*     */     } 
/*     */   }
/*     */   
/*     */   public void resume() {
/* 706 */     if (this.mSurfaceHolder == null && this.mCurrentState == 6) {
/* 707 */       this.mTargetState = 7;
/*     */       return;
/*     */     } 
/* 710 */     if (this.mMediaPlayer != null && this.mCurrentState == 6) {
/* 711 */       Log.w(this.TAG, "Unable to resume video");
/*     */       return;
/*     */     } 
/* 714 */     if (this.mCurrentState == 8) {
/* 715 */       openVideo();
/*     */     }
/*     */   }
/*     */ 
/*     */   
/*     */   public void setLooping(boolean paramBoolean) {
/* 721 */     this.mLooping = paramBoolean;
/* 722 */     if (this.mMediaPlayer != null) {
/* 723 */       this.mMediaPlayer.setLooping(paramBoolean);
/*     */     }
/*     */   }
/*     */   
/*     */   public boolean isLooping() {
/* 728 */     return this.mLooping;
/*     */   }
/*     */ 
/*     */   
/*     */   public int getVideoWidth() {
/* 733 */     return this.mVideoWidth;
/*     */   }
/*     */ 
/*     */   
/*     */   public int getVideoHeight() {
/* 738 */     return this.mVideoHeight;
/*     */   }
/*     */ 
/*     */   
/*     */   public int getDuration() {
/* 743 */     if (isInPlaybackState()) {
/* 744 */       if (this.mDuration > 0) {
/* 745 */         return this.mDuration;
/*     */       }
/* 747 */       this.mDuration = this.mMediaPlayer.getDuration();
/* 748 */       return this.mDuration;
/*     */     } 
/* 750 */     this.mDuration = -1;
/* 751 */     return this.mDuration;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public int getPlayableDuration() {
/* 757 */     if (getDuration() > 0) {
/*     */       
/* 759 */       int i = getBufferPercentage();
/* 760 */       return this.mDuration * i / 100;
/*     */     } 
/*     */     
/* 763 */     return -1;
/*     */   }
/*     */   
/*     */   public int getCurrentPosition() {
/* 767 */     if (isInPlaybackState()) {
/* 768 */       return this.mMediaPlayer.getCurrentPosition();
/*     */     }
/* 770 */     return 0;
/*     */   }
/*     */   
/*     */   public void seekTo(int paramInt) {
/* 774 */     if (isInPlaybackState()) {
/* 775 */       this.mMediaPlayer.seekTo(paramInt);
/* 776 */       this.mSeekWhenPrepared = 0;
/*     */     } else {
/* 778 */       this.mSeekWhenPrepared = paramInt;
/*     */     } 
/*     */   }
/*     */   
/*     */   public boolean isPlaying() {
/* 783 */     return (isInPlaybackState() && this.mMediaPlayer.isPlaying());
/*     */   }
/*     */   
/*     */   public int getBufferPercentage() {
/* 787 */     if (this.mMediaPlayer != null) {
/* 788 */       return this.mCurrentBufferPercentage;
/*     */     }
/* 790 */     return 0;
/*     */   }
/*     */   
/*     */   private boolean isInPlaybackState() {
/* 794 */     return (this.mMediaPlayer != null && this.mCurrentState != -1 && this.mCurrentState != 0 && this.mCurrentState != 1);
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean canPause() {
/* 801 */     return this.mCanPause;
/*     */   }
/*     */   
/*     */   public boolean canSeekBackward() {
/* 805 */     return this.mCanSeekBack;
/*     */   }
/*     */   
/*     */   public boolean canSeekForward() {
/* 809 */     return this.mCanSeekForward;
/*     */   }
/*     */ 
/*     */   
/*     */   public int getAudioSessionId() {
/* 814 */     if (this.mMediaPlayer != null) {
/* 815 */       return this.mMediaPlayer.getAudioSessionId();
/*     */     }
/* 817 */     return 0;
/*     */   }
/*     */   
/*     */   public static interface OnMovieTouchedListener {
/*     */     void onMovieTouched();
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/nativecontrol/ExtVideoView.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */