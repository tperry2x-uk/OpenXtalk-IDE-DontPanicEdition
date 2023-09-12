/*     */ package com.runrev.android;
/*     */ 
/*     */ import android.content.res.AssetFileDescriptor;
/*     */ import android.media.MediaPlayer;
/*     */ import android.os.Build;
/*     */ import android.util.Log;
/*     */ import java.io.FileInputStream;
/*     */ import java.util.Collection;
/*     */ import java.util.HashMap;
/*     */ import java.util.Iterator;
/*     */ import java.util.Set;
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ public class SoundModule
/*     */ {
/*     */   public static final String TAG = "revandroid.SoundModule";
/*     */   public static final int k_playback_now = 0;
/*     */   public static final int k_playback_next = 1;
/*     */   public static final int k_playback_looping = 2;
/*     */   public static final int k_channel_status_stopped = 0;
/*     */   public static final int k_channel_status_paused = 1;
/*     */   public static final int k_channel_status_playing = 2;
/*     */   private Engine m_engine;
/*     */   private HashMap<String, SoundChannel> m_channel_map;
/*     */   private MediaPlayer m_audio_player;
/*     */   private int m_audio_volume;
/*     */   private boolean m_play_audio_player;
/*     */   
/*     */   public SoundModule(Engine paramEngine) {
/*  68 */     this.m_engine = paramEngine;
/*  69 */     this.m_channel_map = new HashMap<>();
/*  70 */     this.m_audio_player = new MediaPlayer();
/*  71 */     this.m_audio_volume = 100;
/*  72 */     this.m_play_audio_player = false;
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public void onPause() {
/*  81 */     this.m_play_audio_player = this.m_audio_player.isPlaying();
/*  82 */     if (this.m_play_audio_player) {
/*  83 */       this.m_audio_player.pause();
/*     */     }
/*  85 */     Collection<SoundChannel> collection = this.m_channel_map.values();
/*  86 */     if (collection != null) {
/*     */       
/*  88 */       Iterator<SoundChannel> iterator = collection.iterator();
/*  89 */       while (iterator.hasNext()) {
/*  90 */         ((SoundChannel)iterator.next()).onPause();
/*     */       }
/*     */     } 
/*     */   }
/*     */   
/*     */   public void onResume() {
/*  96 */     if (this.m_play_audio_player) {
/*  97 */       this.m_audio_player.start();
/*     */     }
/*  99 */     Collection<SoundChannel> collection = this.m_channel_map.values();
/* 100 */     if (collection != null) {
/*     */       
/* 102 */       Iterator<SoundChannel> iterator = collection.iterator();
/* 103 */       while (iterator.hasNext()) {
/* 104 */         ((SoundChannel)iterator.next()).onResume();
/*     */       }
/*     */     } 
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean playSound(String paramString, boolean paramBoolean1, boolean paramBoolean2) {
/* 111 */     if (this.m_audio_player.isPlaying())
/* 112 */       this.m_audio_player.stop(); 
/* 113 */     this.m_audio_player.reset();
/*     */     
/* 115 */     if (paramString != null && paramString.length() > 0) {
/*     */       
/*     */       try {
/*     */         
/* 119 */         if (paramBoolean1) {
/*     */ 
/*     */           
/* 122 */           AssetFileDescriptor assetFileDescriptor = this.m_engine.getContext().getAssets().openFd(paramString);
/* 123 */           this.m_audio_player.setDataSource(assetFileDescriptor.getFileDescriptor(), assetFileDescriptor.getStartOffset(), assetFileDescriptor.getLength());
/*     */         }
/*     */         else {
/*     */           
/* 127 */           FileInputStream fileInputStream = new FileInputStream(paramString);
/* 128 */           this.m_audio_player.setDataSource(fileInputStream.getFD());
/*     */         } 
/* 130 */         setPlayLoudness(this.m_audio_volume);
/* 131 */         this.m_audio_player.setLooping(paramBoolean2);
/* 132 */         this.m_audio_player.setOnCompletionListener(new MediaPlayer.OnCompletionListener()
/*     */             {
/*     */               public void onCompletion(MediaPlayer param1MediaPlayer)
/*     */               {
/* 136 */                 SoundModule.doSoundStopped();
/*     */               }
/*     */             });
/*     */         
/* 140 */         this.m_audio_player.setOnInfoListener(new MediaPlayer.OnInfoListener()
/*     */             {
/*     */               public boolean onInfo(MediaPlayer param1MediaPlayer, int param1Int1, int param1Int2)
/*     */               {
/* 144 */                 return false;
/*     */               }
/*     */             });
/* 147 */         this.m_audio_player.setOnErrorListener(new MediaPlayer.OnErrorListener()
/*     */             {
/*     */               public boolean onError(MediaPlayer param1MediaPlayer, int param1Int1, int param1Int2)
/*     */               {
/* 151 */                 return false;
/*     */               }
/*     */             });
/* 154 */         this.m_audio_player.setOnPreparedListener(new MediaPlayer.OnPreparedListener()
/*     */             {
/*     */               public void onPrepared(MediaPlayer param1MediaPlayer)
/*     */               {
/* 158 */                 param1MediaPlayer.start();
/*     */               }
/*     */             });
/* 161 */         this.m_audio_player.prepareAsync();
/*     */       }
/* 163 */       catch (Exception exception) {
/*     */         
/* 165 */         return false;
/*     */       } 
/*     */     }
/*     */     
/* 169 */     return true;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public int getPlayLoudness() {
/* 175 */     return this.m_audio_volume;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean setPlayLoudness(int paramInt) {
/* 181 */     this.m_audio_volume = paramInt;
/* 182 */     this.m_audio_player.setVolume(this.m_audio_volume / 100.0F, this.m_audio_volume / 100.0F);
/* 183 */     return true;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean playSoundOnChannel(String paramString1, String paramString2, int paramInt, String paramString3, boolean paramBoolean, long paramLong) {
/* 189 */     SoundChannel soundChannel = getSoundChannel(paramString2, true);
/* 190 */     if (soundChannel != null)
/* 191 */       return soundChannel.playSound(paramString1, paramInt, paramString3, paramBoolean, paramLong); 
/* 192 */     return false;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean stopPlayingOnChannel(String paramString) {
/* 198 */     SoundChannel soundChannel = getSoundChannel(paramString, false);
/* 199 */     if (soundChannel != null)
/* 200 */       return soundChannel.stop(); 
/* 201 */     return false;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean pausePlayingOnChannel(String paramString) {
/* 207 */     SoundChannel soundChannel = getSoundChannel(paramString, false);
/* 208 */     if (soundChannel != null)
/* 209 */       return soundChannel.pause(); 
/* 210 */     return false;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean resumePlayingOnChannel(String paramString) {
/* 216 */     SoundChannel soundChannel = getSoundChannel(paramString, false);
/* 217 */     if (soundChannel != null)
/* 218 */       return soundChannel.resume(); 
/* 219 */     return false;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean setChannelVolume(String paramString, int paramInt) {
/* 225 */     SoundChannel soundChannel = getSoundChannel(paramString, true);
/* 226 */     if (soundChannel != null)
/* 227 */       return soundChannel.setVolume(paramInt); 
/* 228 */     return false;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public int getChannelVolume(String paramString) {
/* 234 */     SoundChannel soundChannel = getSoundChannel(paramString, false);
/* 235 */     if (soundChannel != null)
/* 236 */       return soundChannel.getVolume(); 
/* 237 */     return -1;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public String getSoundOnChannel(String paramString) {
/* 243 */     SoundChannel soundChannel = getSoundChannel(paramString, false);
/* 244 */     if (soundChannel != null)
/* 245 */       return soundChannel.getSound(); 
/* 246 */     return null;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public String getNextSoundOnChannel(String paramString) {
/* 252 */     SoundChannel soundChannel = getSoundChannel(paramString, false);
/* 253 */     if (soundChannel != null)
/* 254 */       return soundChannel.getNextSound(); 
/* 255 */     return null;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public int getChannelStatus(String paramString) {
/* 261 */     SoundChannel soundChannel = getSoundChannel(paramString, false);
/* 262 */     if (soundChannel != null)
/* 263 */       return soundChannel.getStatus(); 
/* 264 */     return -1;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public String getSoundChannels() {
/* 270 */     String str = new String();
/* 271 */     Set<String> set = this.m_channel_map.keySet();
/* 272 */     if (set != null) {
/*     */       
/* 274 */       Iterator<String> iterator = set.iterator();
/* 275 */       while (iterator.hasNext()) {
/*     */         
/* 277 */         if (str.length() != 0)
/* 278 */           str = str + '\n'; 
/* 279 */         str = str + iterator.next();
/*     */       } 
/*     */     } 
/* 282 */     return str;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean deleteSoundChannel(String paramString) {
/* 288 */     SoundChannel soundChannel = this.m_channel_map.remove(paramString);
/* 289 */     if (soundChannel != null) {
/*     */       
/* 291 */       soundChannel.release();
/* 292 */       return true;
/*     */     } 
/* 294 */     return false;
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   private SoundChannel getSoundChannel(String paramString, boolean paramBoolean) {
/* 303 */     SoundChannel soundChannel = this.m_channel_map.get(paramString);
/* 304 */     if (soundChannel == null && paramBoolean) {
/*     */       
/* 306 */       soundChannel = new SoundChannel(paramString);
/* 307 */       this.m_channel_map.put(paramString, soundChannel);
/*     */     } 
/* 309 */     return soundChannel;
/*     */   }
/*     */   
/*     */   public static native void doSoundStopped();
/*     */   
/*     */   public static native void doSoundFinishedOnChannel(String paramString1, String paramString2, long paramLong);
/*     */   
/*     */   public static native void doSoundReleaseCallbackHandle(long paramLong);
/*     */   
/*     */   private class SoundChannel {
/*     */     private String m_name;
/*     */     private int m_volume;
/*     */     
/*     */     public SoundChannel(String param1String) {
/* 323 */       this.m_name = param1String;
/* 324 */       this.m_current_player = null;
/* 325 */       this.m_next_player = null;
/* 326 */       this.m_volume = 100;
/* 327 */       this.m_resume_channel = false;
/*     */     }
/*     */     private SoundPlayer m_current_player; private SoundPlayer m_next_player; private boolean m_resume_channel;
/*     */     
/*     */     public void release() {
/* 332 */       if (this.m_current_player != null)
/* 333 */         this.m_current_player.release(); 
/* 334 */       if (this.m_next_player != null) {
/* 335 */         this.m_next_player.release();
/*     */       }
/*     */     }
/*     */     
/*     */     public void onPause() {
/* 340 */       this.m_resume_channel = (this.m_current_player != null && this.m_current_player.m_player != null && this.m_current_player.m_player.isPlaying());
/* 341 */       if (this.m_resume_channel) {
/* 342 */         this.m_current_player.m_player.pause();
/*     */       }
/*     */     }
/*     */     
/*     */     public void onResume() {
/* 347 */       if (this.m_resume_channel && this.m_current_player != null && this.m_current_player.m_player != null)
/* 348 */         this.m_current_player.m_player.start(); 
/*     */     }
/*     */     
/*     */     public boolean playSound(String param1String1, int param1Int, String param1String2, boolean param1Boolean, long param1Long) {
/*     */       SoundPlayer soundPlayer;
/* 353 */       switch (param1Int) {
/*     */ 
/*     */ 
/*     */         
/*     */         case 0:
/*     */         case 2:
/* 359 */           if (this.m_current_player != null) {
/* 360 */             this.m_current_player.reset();
/*     */           } else {
/*     */             
/* 363 */             this.m_current_player = new SoundPlayer();
/* 364 */             if (this.m_current_player == null) {
/* 365 */               return false;
/*     */             }
/*     */           } 
/*     */ 
/*     */           
/* 370 */           if (this.m_next_player != null) {
/*     */             
/* 372 */             this.m_next_player.release();
/* 373 */             this.m_next_player = null;
/*     */           } 
/*     */           
/* 376 */           return this.m_current_player.setSound(param1String1, (param1Int == 2), true, param1String2, param1Boolean, param1Long);
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */         
/*     */         case 1:
/* 389 */           soundPlayer = null;
/* 390 */           if (this.m_current_player != null && !this.m_current_player.m_player.isPlaying() && (!this.m_current_player.isPending() || this.m_current_player.isPrepared())) {
/*     */             
/* 392 */             this.m_current_player.reset();
/* 393 */             soundPlayer = this.m_current_player;
/*     */           }
/* 395 */           else if (this.m_current_player != null && this.m_next_player != null) {
/*     */             
/* 397 */             this.m_next_player.reset();
/* 398 */             soundPlayer = this.m_next_player;
/*     */           }
/*     */           else {
/*     */             
/* 402 */             soundPlayer = new SoundPlayer();
/* 403 */             if (this.m_current_player == null) {
/* 404 */               this.m_current_player = soundPlayer;
/*     */             } else {
/* 406 */               this.m_next_player = soundPlayer;
/*     */             } 
/*     */           } 
/* 409 */           if (soundPlayer == null)
/* 410 */             return false; 
/* 411 */           return soundPlayer.setSound(param1String1, false, false, param1String2, param1Boolean, param1Long);
/*     */       } 
/*     */       
/* 414 */       return false;
/*     */     }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */     
/*     */     public boolean stop() {
/* 422 */       if (this.m_current_player != null) {
/*     */         
/* 424 */         this.m_current_player.reset();
/* 425 */         if (this.m_next_player != null) {
/*     */           
/* 427 */           this.m_next_player.release();
/* 428 */           this.m_next_player = null;
/*     */         } 
/* 430 */         return true;
/*     */       } 
/* 432 */       return true;
/*     */     }
/*     */ 
/*     */     
/*     */     public boolean pause() {
/* 437 */       if (this.m_current_player != null)
/* 438 */         return this.m_current_player.pause(); 
/* 439 */       return true;
/*     */     }
/*     */ 
/*     */ 
/*     */     
/*     */     public boolean resume() {
/* 445 */       if (this.m_current_player != null)
/* 446 */         return this.m_current_player.play(); 
/* 447 */       return true;
/*     */     }
/*     */ 
/*     */     
/*     */     public boolean setVolume(int param1Int) {
/* 452 */       this.m_volume = param1Int;
/* 453 */       if (this.m_current_player != null)
/* 454 */         this.m_current_player.m_player.setVolume(this.m_volume / 100.0F, this.m_volume / 100.0F); 
/* 455 */       return true;
/*     */     }
/*     */ 
/*     */     
/*     */     public int getVolume() {
/* 460 */       return this.m_volume;
/*     */     }
/*     */ 
/*     */     
/*     */     public String getSound() {
/* 465 */       if (this.m_current_player != null)
/* 466 */         return this.m_current_player.getSound(); 
/* 467 */       return null;
/*     */     }
/*     */ 
/*     */     
/*     */     public String getNextSound() {
/* 472 */       if (this.m_next_player != null)
/* 473 */         return this.m_next_player.getSound(); 
/* 474 */       return null;
/*     */     }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */     
/*     */     public int getStatus() {
/* 482 */       if (this.m_current_player != null) {
/*     */         
/* 484 */         if (this.m_current_player.m_player.isPlaying() || (this.m_current_player.isPending() && !this.m_current_player.isPrepared()))
/* 485 */           return 2; 
/* 486 */         if (!this.m_current_player.m_player.isPlaying() && (this.m_current_player.isPrepared() || this.m_current_player.getSound() != null))
/* 487 */           return 1; 
/*     */       } 
/* 489 */       return 0;
/*     */     }
/*     */ 
/*     */     
/*     */     private void playerComplete(long param1Long) {
/* 494 */       if (this.m_current_player != null) {
/*     */         
/* 496 */         SoundModule.doSoundFinishedOnChannel(this.m_name, this.m_current_player.getSound(), param1Long);
/* 497 */         SoundModule.this.m_engine.wakeEngineThread();
/*     */       } 
/*     */ 
/*     */ 
/*     */       
/* 502 */       if (this.m_next_player != null && this.m_next_player.getSound() != null) {
/*     */         
/* 504 */         this.m_next_player.play();
/* 505 */         if (this.m_current_player != null)
/* 506 */           this.m_current_player.release(); 
/* 507 */         this.m_current_player = this.m_next_player;
/* 508 */         this.m_next_player = null;
/*     */       }
/* 510 */       else if (this.m_current_player != null) {
/* 511 */         this.m_current_player.reset();
/*     */       } 
/*     */     }
/*     */ 
/*     */ 
/*     */     
/*     */     private class SoundPlayer
/*     */     {
/*     */       public MediaPlayer m_player;
/*     */ 
/*     */       
/*     */       private boolean m_prepared = false;
/*     */ 
/*     */       
/*     */       private boolean m_pending = false;
/*     */       
/* 527 */       private String m_sound = null;
/* 528 */       private long m_callback_handle = -1L;
/*     */       
/*     */       public SoundPlayer() {
/* 531 */         if (Build.MANUFACTURER.equals("Amazon") && Build.MODEL.equals("Kindle Fire")) {
/* 532 */           this.m_player = new PatchedMediaPlayer();
/*     */         } else {
/* 534 */           this.m_player = new MediaPlayer();
/* 535 */         }  if (this.m_player == null) {
/*     */           return;
/*     */         }
/* 538 */         this.m_player.setOnCompletionListener(new MediaPlayer.OnCompletionListener()
/*     */             {
/*     */               public void onCompletion(MediaPlayer param3MediaPlayer)
/*     */               {
/* 542 */                 SoundModule.SoundChannel.this.playerComplete(SoundModule.SoundChannel.SoundPlayer.this.m_callback_handle);
/*     */               }
/*     */             });
/* 545 */         this.m_player.setOnInfoListener(new MediaPlayer.OnInfoListener()
/*     */             {
/*     */               public boolean onInfo(MediaPlayer param3MediaPlayer, int param3Int1, int param3Int2)
/*     */               {
/* 549 */                 return false;
/*     */               }
/*     */             });
/* 552 */         this.m_player.setOnErrorListener(new MediaPlayer.OnErrorListener()
/*     */             {
/*     */               public boolean onError(MediaPlayer param3MediaPlayer, int param3Int1, int param3Int2)
/*     */               {
/* 556 */                 Log.i("revandroid", "MultiChannelSound Error(" + param3Int1 + " " + param3Int2 + ")");
/* 557 */                 return false;
/*     */               }
/*     */             });
/* 560 */         this.m_player.setOnPreparedListener(new MediaPlayer.OnPreparedListener()
/*     */             {
/*     */               public void onPrepared(MediaPlayer param3MediaPlayer)
/*     */               {
/* 564 */                 SoundModule.SoundChannel.SoundPlayer.this.m_prepared = true;
/* 565 */                 if (SoundModule.SoundChannel.SoundPlayer.this.m_pending) {
/*     */                   
/* 567 */                   SoundModule.SoundChannel.SoundPlayer.this.m_pending = false;
/* 568 */                   param3MediaPlayer.start();
/*     */                 } 
/*     */               }
/*     */             });
/*     */       }
/*     */ 
/*     */       
/*     */       public boolean setSound(String param2String1, boolean param2Boolean1, boolean param2Boolean2, String param2String2, boolean param2Boolean3, long param2Long) {
/* 576 */         this.m_pending = param2Boolean2;
/* 577 */         this.m_prepared = false;
/* 578 */         this.m_sound = param2String2;
/* 579 */         this.m_callback_handle = param2Long;
/* 580 */         this.m_player.setLooping(param2Boolean1);
/* 581 */         this.m_player.setVolume(SoundModule.SoundChannel.this.m_volume / 100.0F, SoundModule.SoundChannel.this.m_volume / 100.0F);
/*     */         try {
/* 583 */           if (param2Boolean3) {
/*     */ 
/*     */             
/* 586 */             AssetFileDescriptor assetFileDescriptor = SoundModule.this.m_engine.getContext().getAssets().openFd(param2String1);
/* 587 */             this.m_player.setDataSource(assetFileDescriptor.getFileDescriptor(), assetFileDescriptor.getStartOffset(), assetFileDescriptor.getLength());
/*     */           }
/*     */           else {
/*     */             
/* 591 */             FileInputStream fileInputStream = new FileInputStream(param2String1);
/* 592 */             this.m_player.setDataSource(fileInputStream.getFD());
/*     */           } 
/* 594 */           this.m_player.prepareAsync();
/* 595 */         } catch (Exception exception) {
/* 596 */           Log.i("revandroid", exception.toString());
/*     */           
/* 598 */           this.m_callback_handle = -1L;
/* 599 */           reset();
/* 600 */           return false;
/*     */         } 
/* 602 */         return true;
/*     */       }
/*     */ 
/*     */       
/*     */       public String getSound() {
/* 607 */         return this.m_sound;
/*     */       }
/*     */ 
/*     */ 
/*     */       
/*     */       public void reset() {
/* 613 */         if (this.m_player.isPlaying())
/* 614 */           this.m_player.stop(); 
/* 615 */         this.m_sound = null;
/* 616 */         this.m_pending = false;
/* 617 */         this.m_prepared = false;
/* 618 */         this.m_player.reset();
/* 619 */         if (this.m_callback_handle >= 0L)
/* 620 */           SoundModule.doSoundReleaseCallbackHandle(this.m_callback_handle); 
/* 621 */         this.m_callback_handle = -1L;
/*     */       }
/*     */ 
/*     */ 
/*     */       
/*     */       public void release() {
/* 627 */         if (this.m_player != null)
/* 628 */           this.m_player.release(); 
/* 629 */         this.m_player = null;
/* 630 */         this.m_sound = null;
/* 631 */         if (this.m_callback_handle >= 0L) {
/* 632 */           SoundModule.doSoundReleaseCallbackHandle(this.m_callback_handle);
/*     */         }
/*     */       }
/*     */ 
/*     */ 
/*     */       
/*     */       public boolean play() {
/* 639 */         if (this.m_player != null && !this.m_player.isPlaying()) {
/*     */           
/* 641 */           if (this.m_prepared) {
/* 642 */             this.m_player.start();
/*     */           } else {
/* 644 */             this.m_pending = true;
/* 645 */           }  return true;
/*     */         } 
/* 647 */         return true;
/*     */       }
/*     */ 
/*     */       
/*     */       public boolean pause() {
/* 652 */         if (this.m_player != null && this.m_player.isPlaying()) {
/*     */           
/* 654 */           this.m_player.pause();
/* 655 */           return true;
/*     */         } 
/* 657 */         return true;
/*     */       }
/*     */ 
/*     */       
/*     */       public boolean isPending() {
/* 662 */         return this.m_pending;
/*     */       }
/*     */ 
/*     */       
/*     */       public boolean isPrepared() {
/* 667 */         return this.m_prepared;
/*     */       }
/*     */ 
/*     */ 
/*     */       
/*     */       private class PatchedMediaPlayer
/*     */         extends MediaPlayer
/*     */       {
/*     */         private MediaPlayer.OnCompletionListener m_completion_listener;
/*     */         
/*     */         private Runnable m_completion_callback;
/*     */         
/*     */         private boolean m_playing = false;
/*     */ 
/*     */         
/*     */         public PatchedMediaPlayer() {
/* 683 */           final PatchedMediaPlayer t_player = this;
/* 684 */           this.m_completion_callback = new Runnable()
/*     */             {
/*     */               public void run() {
/* 687 */                 SoundModule.SoundChannel.SoundPlayer.PatchedMediaPlayer.this.m_playing = false;
/* 688 */                 SoundModule.SoundChannel.SoundPlayer.PatchedMediaPlayer.this.m_completion_listener.onCompletion(t_player);
/*     */               }
/*     */             };
/*     */         }
/*     */ 
/*     */         
/*     */         public void start() {
/* 695 */           this.m_playing = true;
/* 696 */           SoundModule.this.m_engine.getHandler().postDelayed(this.m_completion_callback, (getDuration() - getCurrentPosition()));
/* 697 */           super.start();
/*     */         }
/*     */ 
/*     */         
/*     */         public void pause() {
/* 702 */           this.m_playing = false;
/* 703 */           SoundModule.this.m_engine.getHandler().removeCallbacks(this.m_completion_callback);
/* 704 */           super.pause();
/*     */         }
/*     */ 
/*     */         
/*     */         public void stop() {
/* 709 */           this.m_playing = false;
/* 710 */           SoundModule.this.m_engine.getHandler().removeCallbacks(this.m_completion_callback);
/* 711 */           super.stop();
/*     */         }
/*     */ 
/*     */         
/*     */         public boolean isPlaying() {
/* 716 */           return this.m_playing;
/*     */         }
/*     */ 
/*     */         
/*     */         public void setOnCompletionListener(MediaPlayer.OnCompletionListener param3OnCompletionListener) {
/* 721 */           this.m_completion_listener = param3OnCompletionListener;
/*     */         }
/*     */       }
/*     */     }
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/SoundModule.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */