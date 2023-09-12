/*     */ package com.runrev.android;
/*     */ 
/*     */ import android.hardware.GeomagneticField;
/*     */ import android.hardware.Sensor;
/*     */ import android.hardware.SensorEvent;
/*     */ import android.hardware.SensorEventListener;
/*     */ import android.hardware.SensorManager;
/*     */ import android.location.Criteria;
/*     */ import android.location.Location;
/*     */ import android.location.LocationListener;
/*     */ import android.location.LocationManager;
/*     */ import android.os.Build;
/*     */ import android.os.Bundle;
/*     */ import android.os.SystemClock;
/*     */ import android.util.Log;
/*     */ import java.util.List;
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ class SensorModule
/*     */ {
/*     */   public static final String TAG = "revandroid.SensorModule";
/*     */   private Engine m_engine;
/*     */   private SensorManager m_sensor_manager;
/*     */   private AccelerationTracker m_accel_tracker;
/*     */   private LocationTracker m_location_tracker;
/*     */   private HeadingTracker m_heading_tracker;
/*     */   private RotationRateTracker m_rotation_rate_tracker;
/*     */   public static final int SENSOR_UNKNOWN = 0;
/*     */   public static final int SENSOR_LOCATION = 1;
/*     */   public static final int SENSOR_HEADING = 2;
/*     */   public static final int SENSOR_ACCELERATION = 3;
/*     */   public static final int SENSOR_ROTATION_RATE = 4;
/*     */   
/*     */   abstract class Tracker
/*     */   {
/*     */     protected boolean m_paused = false;
/*     */     protected boolean m_registered = false;
/*  56 */     protected int m_tracking_requested = 0;
/*  57 */     protected int m_tracking_internal = 0; public static final int NO_TRACKING = 0; public static final int COARSE_TRACKING = 1;
/*     */     public static final int FINE_TRACKING = 2;
/*     */     
/*     */     protected abstract boolean register(boolean param1Boolean);
/*     */     
/*     */     protected abstract boolean unregister();
/*     */     
/*     */     public abstract boolean isAvailable();
/*     */     
/*     */     public boolean startTracking(boolean param1Boolean) {
/*  67 */       return setTracking(param1Boolean ? 1 : 2, this.m_tracking_internal);
/*     */     }
/*     */ 
/*     */     
/*     */     public boolean startTrackingInternal(boolean param1Boolean) {
/*  72 */       return setTracking(this.m_tracking_requested, param1Boolean ? 1 : 2);
/*     */     }
/*     */ 
/*     */ 
/*     */ 
/*     */     
/*     */     public boolean setTracking(int param1Int1, int param1Int2) {
/*  79 */       int i = Math.max(this.m_tracking_requested, this.m_tracking_internal);
/*  80 */       int j = Math.max(param1Int1, param1Int2);
/*     */       
/*  82 */       if (i == j) {
/*     */         
/*  84 */         this.m_tracking_requested = param1Int1;
/*  85 */         this.m_tracking_internal = param1Int2;
/*  86 */         return true;
/*     */       } 
/*  88 */       if (j == 0) {
/*     */         
/*  90 */         if (unregister()) {
/*     */           
/*  92 */           this.m_tracking_requested = param1Int1;
/*  93 */           this.m_tracking_internal = param1Int2;
/*  94 */           return true;
/*     */         } 
/*     */         
/*  97 */         return false;
/*     */       } 
/*     */ 
/*     */       
/* 101 */       if (unregister() && register((j == 1))) {
/*     */         
/* 103 */         this.m_tracking_requested = param1Int1;
/* 104 */         this.m_tracking_internal = param1Int2;
/* 105 */         return true;
/*     */       } 
/*     */       
/* 108 */       return false;
/*     */     }
/*     */ 
/*     */ 
/*     */     
/*     */     public boolean stopTracking() {
/* 114 */       return setTracking(0, this.m_tracking_internal);
/*     */     }
/*     */ 
/*     */     
/*     */     public boolean stopTrackingInternal() {
/* 119 */       return setTracking(this.m_tracking_requested, 0);
/*     */     }
/*     */ 
/*     */     
/*     */     public boolean isTracking() {
/* 124 */       return (this.m_tracking_requested != 0 || this.m_tracking_internal != 0);
/*     */     }
/*     */ 
/*     */     
/*     */     public void pause() {
/* 129 */       if (this.m_paused) {
/*     */         return;
/*     */       }
/* 132 */       this.m_paused = true;
/* 133 */       if (isTracking()) {
/* 134 */         unregister();
/*     */       }
/*     */     }
/*     */     
/*     */     public void resume() {
/* 139 */       if (!this.m_paused) {
/*     */         return;
/*     */       }
/* 142 */       this.m_paused = false;
/* 143 */       if (isTracking())
/* 144 */         register((Math.max(this.m_tracking_requested, this.m_tracking_internal) == 1)); 
/*     */     }
/*     */   }
/*     */   
/*     */   class AccelerationTracker
/*     */     extends Tracker implements SensorEventListener {
/*     */     private Sensor m_accelerometer;
/* 151 */     private float m_x = 0.0F; private float m_y = 0.0F; private float m_z = 0.0F;
/*     */ 
/*     */ 
/*     */ 
/*     */     
/*     */     public AccelerationTracker() {
/* 157 */       this.m_accelerometer = SensorModule.this.m_sensor_manager.getDefaultSensor(1);
/*     */     }
/*     */ 
/*     */     
/*     */     public boolean isAvailable() {
/* 162 */       return (this.m_accelerometer != null);
/*     */     }
/*     */     
/*     */     protected boolean register(boolean param1Boolean) {
/*     */       boolean bool;
/* 167 */       if (this.m_registered) {
/* 168 */         return true;
/*     */       }
/*     */       
/* 171 */       if (param1Boolean) {
/* 172 */         bool = true;
/*     */       } else {
/* 174 */         bool = true;
/*     */       } 
/* 176 */       this.m_registered = SensorModule.this.m_sensor_manager.registerListener(this, this.m_accelerometer, bool);
/* 177 */       return this.m_registered;
/*     */     }
/*     */ 
/*     */     
/*     */     protected boolean unregister() {
/* 182 */       if (!this.m_registered) {
/* 183 */         return true;
/*     */       }
/* 185 */       SensorModule.this.m_sensor_manager.unregisterListener(this);
/* 186 */       this.m_registered = false;
/*     */       
/* 188 */       return true;
/*     */     }
/*     */ 
/*     */ 
/*     */     
/*     */     public void onAccuracyChanged(Sensor param1Sensor, int param1Int) {}
/*     */ 
/*     */ 
/*     */     
/*     */     public void onSensorChanged(SensorEvent param1SensorEvent) {
/* 198 */       if (param1SensorEvent.sensor.getType() == 1)
/*     */       {
/* 200 */         if (param1SensorEvent.values[0] != this.m_x || param1SensorEvent.values[1] != this.m_y || param1SensorEvent.values[2] != this.m_z) {
/*     */           
/* 202 */           this.m_x = param1SensorEvent.values[0];
/* 203 */           this.m_y = param1SensorEvent.values[1];
/* 204 */           this.m_z = param1SensorEvent.values[2];
/* 205 */           if (this.m_tracking_requested != 0)
/* 206 */             SensorModule.this.m_engine.onAccelerationChanged(this.m_x, this.m_y, this.m_z, ((float)param1SensorEvent.timestamp / 1.0E9F)); 
/*     */         } 
/*     */       }
/*     */     }
/*     */     
/* 211 */     public float getX() { return this.m_x; }
/* 212 */     public float getY() { return this.m_y; } public float getZ() {
/* 213 */       return this.m_z;
/*     */     }
/*     */   }
/*     */ 
/*     */   
/*     */   class LocationTracker
/*     */     extends Tracker
/*     */   {
/*     */     boolean m_use_gps;
/*     */     
/*     */     boolean m_gps_available;
/*     */     
/*     */     double m_timestamp_offset;
/*     */     
/*     */     Location m_last_location;
/*     */     
/*     */     LocationManager m_location_manager;
/*     */     LocationListener m_location_listener;
/*     */     
/*     */     public LocationTracker() {
/*     */       double d1;
/* 234 */       if (Build.VERSION.SDK_INT >= 17) {
/* 235 */         d1 = SystemClock.elapsedRealtimeNanos() / 1.0E9D;
/*     */       } else {
/* 237 */         d1 = SystemClock.elapsedRealtime() / 1000.0D;
/*     */       } 
/*     */       
/* 240 */       double d2 = System.currentTimeMillis() / 1000.0D;
/*     */ 
/*     */ 
/*     */       
/* 244 */       this.m_timestamp_offset = d2 - d1;
/*     */       
/* 246 */       this.m_location_manager = (LocationManager)SensorModule.this.m_engine.getContext().getSystemService("location");
/* 247 */       this.m_location_listener = new LocationListener()
/*     */         {
/*     */           
/*     */           public void onLocationChanged(Location param2Location)
/*     */           {
/* 252 */             if (SensorModule.LocationTracker.this.m_gps_available)
/*     */               return; 
/* 254 */             SensorModule.LocationTracker.this.onLocationChanged(param2Location);
/*     */           }
/*     */ 
/*     */           
/*     */           public void onProviderDisabled(String param2String) {
/* 259 */             SensorModule.LocationTracker.this.m_gps_available = false;
/*     */           }
/*     */ 
/*     */ 
/*     */           
/*     */           public void onProviderEnabled(String param2String) {}
/*     */ 
/*     */           
/*     */           public void onStatusChanged(String param2String, int param2Int, Bundle param2Bundle) {
/* 268 */             SensorModule.LocationTracker.this.m_gps_available = (param2Int == 2);
/*     */           }
/*     */         };
/*     */       
/* 272 */       this.m_last_location = null;
/* 273 */       this.m_gps_available = false;
/*     */     }
/*     */ 
/*     */ 
/*     */     
/*     */     public boolean isAvailable() {
/* 279 */       List list = this.m_location_manager.getProviders(true);
/* 280 */       return (list != null && !list.isEmpty());
/*     */     }
/*     */ 
/*     */     
/*     */     protected boolean register(boolean param1Boolean) {
/* 285 */       if (this.m_registered) {
/* 286 */         return true;
/*     */       }
/* 288 */       this.m_use_gps = !param1Boolean;
/*     */       
/* 290 */       Criteria criteria = new Criteria();
/* 291 */       if (this.m_use_gps) {
/* 292 */         criteria.setAccuracy(1);
/*     */       } else {
/* 294 */         criteria.setAccuracy(2);
/*     */       } 
/*     */       
/*     */       try {
/* 298 */         this.m_location_manager.requestLocationUpdates(0L, 0.0F, criteria, this.m_location_listener, null);
/* 299 */         this.m_registered = true;
/*     */       }
/* 301 */       catch (SecurityException securityException) {}
/*     */ 
/*     */ 
/*     */       
/* 305 */       return this.m_registered;
/*     */     }
/*     */ 
/*     */     
/*     */     protected boolean unregister() {
/* 310 */       if (!this.m_registered) {
/* 311 */         return true;
/*     */       }
/* 313 */       this.m_location_manager.removeUpdates(this.m_location_listener);
/*     */       
/* 315 */       this.m_registered = false;
/* 316 */       return true;
/*     */     }
/*     */ 
/*     */     
/*     */     protected void onLocationChanged(Location param1Location) {
/* 321 */       this.m_last_location = new Location(param1Location);
/* 322 */       if (this.m_tracking_requested != 0) {
/*     */         double d1, d2, d3;
/*     */ 
/*     */         
/* 326 */         if (param1Location.hasSpeed()) {
/* 327 */           d1 = param1Location.getSpeed();
/*     */         } else {
/* 329 */           d1 = -1.0D;
/*     */         } 
/* 331 */         if (param1Location.hasBearing()) {
/* 332 */           d2 = param1Location.getBearing();
/*     */         } else {
/* 334 */           d2 = -1.0D;
/*     */         } 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */         
/* 345 */         if (Build.VERSION.SDK_INT >= 17) {
/* 346 */           d3 = param1Location.getElapsedRealtimeNanos() / 1.0E9D + this.m_timestamp_offset;
/*     */         } else {
/* 348 */           d3 = param1Location.getTime() / 1000.0D;
/*     */         } 
/* 350 */         SensorModule.this.m_engine.onLocationChanged(param1Location.getLatitude(), param1Location.getLongitude(), param1Location.getAltitude(), d3, param1Location
/* 351 */             .getAccuracy(), d1, d2);
/*     */       } 
/*     */     }
/*     */     public boolean hasLocation() {
/* 355 */       return (this.m_last_location != null);
/*     */     }
/* 357 */     public double getLatitude() { return this.m_last_location.getLatitude(); }
/* 358 */     public double getLongitude() { return this.m_last_location.getLongitude(); } public double getAltitude() {
/* 359 */       return this.m_last_location.getAltitude();
/*     */     }
/*     */ 
/*     */ 
/*     */     
/*     */     public boolean startTracking(boolean param1Boolean) {
/* 365 */       boolean bool = param1Boolean ? true : true;
/*     */       
/* 367 */       if (this.m_tracking_requested == bool) {
/* 368 */         return true;
/*     */       }
/*     */       
/* 371 */       boolean bool1 = super.startTracking(param1Boolean);
/* 372 */       if (bool1 && this.m_last_location != null)
/* 373 */         SensorModule.this.m_engine.post(new Runnable() {
/*     */               public void run() {
/* 375 */                 SensorModule.LocationTracker.this.onLocationChanged(SensorModule.LocationTracker.this.m_last_location);
/*     */               }
/*     */             }); 
/* 378 */       return bool1;
/*     */     }
/*     */ 
/*     */ 
/*     */ 
/*     */     
/*     */     public boolean stopTracking() {
/* 385 */       boolean bool = super.stopTracking();
/* 386 */       if (bool && !isTracking())
/* 387 */         this.m_last_location = null; 
/* 388 */       return bool;
/*     */     }
/*     */   }
/*     */   
/*     */   class HeadingTracker
/*     */     extends Tracker implements SensorEventListener {
/*     */     private Sensor m_magnetometer;
/* 395 */     private float m_x = 0.0F; private float m_y = 0.0F; private float m_z = 0.0F;
/*     */ 
/*     */ 
/*     */ 
/*     */     
/*     */     public HeadingTracker() {
/* 401 */       this.m_magnetometer = SensorModule.this.m_sensor_manager.getDefaultSensor(2);
/*     */     }
/*     */ 
/*     */     
/*     */     public boolean isAvailable() {
/* 406 */       return (this.m_magnetometer != null);
/*     */     }
/*     */     
/*     */     protected boolean register(boolean param1Boolean) {
/*     */       boolean bool;
/* 411 */       if (this.m_registered) {
/* 412 */         return true;
/*     */       }
/*     */       
/* 415 */       if (param1Boolean) {
/* 416 */         bool = true;
/*     */       } else {
/* 418 */         bool = true;
/*     */       } 
/* 420 */       if (param1Boolean) {
/* 421 */         this
/* 422 */           .m_registered = (SensorModule.this.m_accel_tracker.startTrackingInternal(true) && SensorModule.this.m_sensor_manager.registerListener(this, this.m_magnetometer, bool));
/*     */       } else {
/* 424 */         this
/* 425 */           .m_registered = (SensorModule.this.m_accel_tracker.startTrackingInternal(true) && SensorModule.this.m_location_tracker.startTrackingInternal(true) && SensorModule.this.m_sensor_manager.registerListener(this, this.m_magnetometer, bool));
/*     */       } 
/* 427 */       return this.m_registered;
/*     */     }
/*     */ 
/*     */     
/*     */     protected boolean unregister() {
/* 432 */       SensorModule.this.m_accel_tracker.stopTrackingInternal();
/* 433 */       SensorModule.this.m_location_tracker.stopTrackingInternal();
/*     */       
/* 435 */       if (!this.m_registered) {
/* 436 */         return true;
/*     */       }
/* 438 */       SensorModule.this.m_sensor_manager.unregisterListener(this);
/* 439 */       this.m_registered = false;
/*     */       
/* 441 */       return true;
/*     */     }
/*     */ 
/*     */ 
/*     */     
/*     */     public void onAccuracyChanged(Sensor param1Sensor, int param1Int) {}
/*     */ 
/*     */ 
/*     */     
/*     */     private double toHeading(double param1Double) {
/* 451 */       while (param1Double < 0.0D)
/* 452 */         param1Double += 360.0D; 
/* 453 */       while (param1Double >= 360.0D) {
/* 454 */         param1Double -= 360.0D;
/*     */       }
/* 456 */       return param1Double;
/*     */     }
/*     */ 
/*     */     
/*     */     public void onSensorChanged(SensorEvent param1SensorEvent) {
/* 461 */       if (param1SensorEvent.sensor.getType() == 2) {
/*     */         
/* 463 */         if (!SensorModule.this.m_accel_tracker.isTracking()) {
/*     */           return;
/*     */         }
/*     */         
/* 467 */         double d1 = 0.0D;
/* 468 */         double d2 = 0.0D;
/* 469 */         double d3 = 0.0D;
/*     */         
/* 471 */         float f1 = param1SensorEvent.values[0];
/* 472 */         float f2 = param1SensorEvent.values[1];
/* 473 */         float f3 = param1SensorEvent.values[2];
/*     */         
/* 475 */         float[] arrayOfFloat1 = new float[3];
/* 476 */         arrayOfFloat1[0] = SensorModule.this.m_accel_tracker.getX();
/* 477 */         arrayOfFloat1[1] = SensorModule.this.m_accel_tracker.getY();
/* 478 */         arrayOfFloat1[2] = SensorModule.this.m_accel_tracker.getZ();
/*     */         
/* 480 */         float[] arrayOfFloat2 = new float[9];
/* 481 */         float[] arrayOfFloat3 = new float[9];
/*     */         
/* 483 */         SensorModule.this.m_sensor_manager; SensorManager.getRotationMatrix(arrayOfFloat3, arrayOfFloat2, arrayOfFloat1, param1SensorEvent.values);
/*     */         
/* 485 */         float[] arrayOfFloat4 = new float[3];
/*     */         
/* 487 */         SensorModule.this.m_sensor_manager; SensorManager.getOrientation(arrayOfFloat3, arrayOfFloat4);
/*     */         
/* 489 */         d1 = toHeading(Math.toDegrees(arrayOfFloat4[0]));
/*     */         
/* 491 */         if (SensorModule.this.m_location_tracker.hasLocation()) {
/*     */ 
/*     */ 
/*     */ 
/*     */           
/* 496 */           GeomagneticField geomagneticField = new GeomagneticField((float)SensorModule.this.m_location_tracker.getLatitude(), (float)SensorModule.this.m_location_tracker.getLongitude(), (float)SensorModule.this.m_location_tracker.getAltitude(), System.currentTimeMillis());
/* 497 */           d2 = toHeading(Math.toDegrees(arrayOfFloat4[0]) + geomagneticField.getDeclination());
/*     */           
/* 499 */           d3 = d2;
/*     */         } else {
/*     */           
/* 502 */           d3 = d1;
/*     */         } 
/* 504 */         SensorModule.this.m_engine.onHeadingChanged(d3, d1, d2, ((float)param1SensorEvent.timestamp / 1.0E9F), f1, f2, f3, param1SensorEvent.accuracy);
/*     */       } 
/*     */     }
/*     */   }
/*     */   
/*     */   class RotationRateTracker
/*     */     extends Tracker
/*     */     implements SensorEventListener {
/*     */     private Sensor m_gyroscope;
/* 513 */     private float m_x = 0.0F; private float m_y = 0.0F; private float m_z = 0.0F;
/*     */ 
/*     */ 
/*     */ 
/*     */     
/*     */     public RotationRateTracker() {
/* 519 */       this.m_gyroscope = SensorModule.this.m_sensor_manager.getDefaultSensor(4);
/* 520 */       Log.i("revandroid.SensorModule", "gyroscope sensor: " + this.m_gyroscope);
/*     */     }
/*     */ 
/*     */     
/*     */     public boolean isAvailable() {
/* 525 */       return (this.m_gyroscope != null);
/*     */     }
/*     */     
/*     */     protected boolean register(boolean param1Boolean) {
/*     */       boolean bool;
/* 530 */       if (this.m_registered) {
/* 531 */         return true;
/*     */       }
/*     */       
/* 534 */       if (param1Boolean) {
/* 535 */         bool = true;
/*     */       } else {
/* 537 */         bool = true;
/*     */       } 
/* 539 */       this.m_registered = SensorModule.this.m_sensor_manager.registerListener(this, this.m_gyroscope, bool);
/* 540 */       Log.i("revandroid.SensorModule", "gyroscope registered: " + this.m_registered);
/* 541 */       return this.m_registered;
/*     */     }
/*     */ 
/*     */     
/*     */     protected boolean unregister() {
/* 546 */       if (!this.m_registered) {
/* 547 */         return true;
/*     */       }
/* 549 */       SensorModule.this.m_sensor_manager.unregisterListener(this);
/* 550 */       this.m_registered = false;
/*     */       
/* 552 */       return true;
/*     */     }
/*     */ 
/*     */ 
/*     */     
/*     */     public void onAccuracyChanged(Sensor param1Sensor, int param1Int) {}
/*     */ 
/*     */ 
/*     */     
/*     */     public void onSensorChanged(SensorEvent param1SensorEvent) {
/* 562 */       if (param1SensorEvent.sensor.getType() == 4) {
/*     */         
/* 564 */         Log.i("revandroid.SensorModule", "gyroscope event");
/* 565 */         if (param1SensorEvent.values[0] != this.m_x || param1SensorEvent.values[1] != this.m_y || param1SensorEvent.values[2] != this.m_z) {
/*     */           
/* 567 */           this.m_x = param1SensorEvent.values[0];
/* 568 */           this.m_y = param1SensorEvent.values[1];
/* 569 */           this.m_z = param1SensorEvent.values[2];
/* 570 */           if (this.m_tracking_requested != 0)
/* 571 */             SensorModule.this.m_engine.onRotationRateChanged(this.m_x, this.m_y, this.m_z, ((float)param1SensorEvent.timestamp / 1.0E9F)); 
/*     */         } 
/*     */       } 
/*     */     }
/*     */     
/* 576 */     public float getX() { return this.m_x; }
/* 577 */     public float getY() { return this.m_y; } public float getZ() {
/* 578 */       return this.m_z;
/*     */     }
/*     */   }
/*     */   
/*     */   public SensorModule(Engine paramEngine) {
/* 583 */     this.m_engine = paramEngine;
/*     */     
/* 585 */     this.m_sensor_manager = (SensorManager)this.m_engine.getContext().getSystemService("sensor");
/*     */ 
/*     */     
/* 588 */     this.m_accel_tracker = new AccelerationTracker();
/* 589 */     this.m_location_tracker = new LocationTracker();
/* 590 */     this.m_heading_tracker = new HeadingTracker();
/* 591 */     this.m_rotation_rate_tracker = new RotationRateTracker();
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean isSensorAvailable(int paramInt) {
/* 602 */     boolean bool = false;
/* 603 */     switch (paramInt) {
/*     */       
/*     */       case 1:
/* 606 */         return this.m_location_tracker.isAvailable();
/*     */       case 2:
/* 608 */         return this.m_heading_tracker.isAvailable();
/*     */       case 3:
/* 610 */         return this.m_accel_tracker.isAvailable();
/*     */       case 4:
/* 612 */         return this.m_rotation_rate_tracker.isAvailable();
/*     */     } 
/* 614 */     return false;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean isLocationAvailable() {
/* 620 */     return true;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean startTrackingLocation(boolean paramBoolean) {
/* 625 */     return this.m_location_tracker.startTracking(paramBoolean);
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean stopTrackingLocation() {
/* 630 */     return this.m_location_tracker.stopTracking();
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean startTrackingHeading(boolean paramBoolean) {
/* 635 */     return this.m_heading_tracker.startTracking(paramBoolean);
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean stopTrackingHeading() {
/* 640 */     return this.m_heading_tracker.stopTracking();
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean startTrackingAcceleration(boolean paramBoolean) {
/* 645 */     return this.m_accel_tracker.startTracking(paramBoolean);
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean stopTrackingAcceleration() {
/* 650 */     return this.m_accel_tracker.stopTracking();
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean startTrackingRotationRate(boolean paramBoolean) {
/* 655 */     return this.m_rotation_rate_tracker.startTracking(paramBoolean);
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean stopTrackingRotationRate() {
/* 660 */     return this.m_rotation_rate_tracker.stopTracking();
/*     */   }
/*     */ 
/*     */   
/*     */   public void onPause() {
/* 665 */     this.m_accel_tracker.pause();
/* 666 */     this.m_location_tracker.pause();
/*     */   }
/*     */ 
/*     */   
/*     */   public void onResume() {
/* 671 */     this.m_accel_tracker.resume();
/* 672 */     this.m_location_tracker.resume();
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void finish() {
/* 678 */     this.m_rotation_rate_tracker.stopTracking();
/* 679 */     this.m_heading_tracker.stopTracking();
/* 680 */     this.m_accel_tracker.stopTracking();
/* 681 */     this.m_location_tracker.stopTracking();
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/SensorModule.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */