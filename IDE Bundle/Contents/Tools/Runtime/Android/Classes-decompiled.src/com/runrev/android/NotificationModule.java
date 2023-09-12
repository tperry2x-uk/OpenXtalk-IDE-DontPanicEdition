/*     */ package com.runrev.android;
/*     */ 
/*     */ import android.app.AlarmManager;
/*     */ import android.app.Notification;
/*     */ import android.app.NotificationChannel;
/*     */ import android.app.NotificationManager;
/*     */ import android.app.PendingIntent;
/*     */ import android.content.ContentValues;
/*     */ import android.content.Context;
/*     */ import android.content.Intent;
/*     */ import android.database.Cursor;
/*     */ import android.database.sqlite.SQLiteDatabase;
/*     */ import android.database.sqlite.SQLiteOpenHelper;
/*     */ import android.os.Build;
/*     */ import android.os.Parcelable;
/*     */ import android.util.Log;
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ public class NotificationModule
/*     */ {
/*     */   public static final String TAG = "revandroid.NotificationModule";
/*     */   public static final int NOTIFY_TYPE_LOCAL = 1;
/*     */   public static final int NOTIFY_TYPE_REMOTE = 2;
/*     */   public static final String ACTION_DISPATCH_NOTIFICATIONS = "com.runrev.android.DISPATCH_NOTIFICATIONS";
/*     */   public static final String ACTION_CANCEL_NOTIFICATION = "com.runrev.android.CANCEL_NOTIFICATION";
/*     */   protected Engine m_engine;
/*  44 */   protected static Class s_receiver_class = null;
/*  45 */   protected static AlarmManager s_manager = null; protected static final String DB_NAME = "lc_notification.db"; protected static final int DB_VERSION = 1; protected static final String DB_TABLE = "notification"; protected static final String NOTIFY_ID = "id"; protected static final String NOTIFY_TYPE = "type";
/*     */   protected static final String NOTIFY_TIME = "time";
/*     */   
/*     */   public NotificationModule(Engine paramEngine) {
/*  49 */     this.m_engine = paramEngine;
/*     */   }
/*     */   protected static final String NOTIFY_BODY = "body"; protected static final String NOTIFY_ACTION = "action"; protected static final String NOTIFY_INFO = "info"; protected static final String NOTIFY_PLAY_SOUND = "play_sound"; protected static final String NOTIFY_BADGE = "badge"; protected static final String NOTIFY_SHOWN = "shown";
/*     */   
/*     */   protected static AlarmManager getAlarmManager(Context paramContext) {
/*  54 */     if (s_manager == null)
/*     */     {
/*  56 */       s_manager = (AlarmManager)paramContext.getSystemService("alarm");
/*     */     }
/*     */     
/*  59 */     return s_manager;
/*     */   }
/*     */ 
/*     */   
/*     */   protected static Class getReceiverClass(Context paramContext) {
/*  64 */     if (s_receiver_class == null) {
/*     */       
/*  66 */       String str = paramContext.getPackageName() + ".AppReceiver";
/*     */       
/*     */       try {
/*  69 */         Class<?> clazz = Class.forName(str);
/*  70 */         s_receiver_class = clazz;
/*     */       }
/*  72 */       catch (Exception exception) {
/*     */         
/*  74 */         s_receiver_class = null;
/*     */       } 
/*     */     } 
/*  77 */     return s_receiver_class;
/*     */   }
/*     */ 
/*     */   
/*     */   protected static void resetTimer(Context paramContext) {
/*  82 */     Class clazz = getReceiverClass(paramContext);
/*  83 */     if (clazz == null) {
/*     */       return;
/*     */     }
/*  86 */     Intent intent = new Intent(paramContext, clazz);
/*  87 */     intent.setAction("com.runrev.android.DISPATCH_NOTIFICATIONS");
/*  88 */     PendingIntent pendingIntent = PendingIntent.getBroadcast(paramContext, 0, intent, 0);
/*     */     
/*  90 */     long l = getEarliestNotificationTime(paramContext);
/*     */     
/*  92 */     if (l == Long.MAX_VALUE) {
/*     */       
/*  94 */       getAlarmManager(paramContext).cancel(pendingIntent);
/*     */     }
/*     */     else {
/*     */       
/*  98 */       getAlarmManager(paramContext).set(1, l, pendingIntent);
/*     */     } 
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public long createLocalNotification(String paramString1, String paramString2, String paramString3, long paramLong, boolean paramBoolean, int paramInt) {
/* 108 */     long l = insertNotification(this.m_engine.getContext(), 1, paramLong, paramString1, paramString2, paramString3, paramBoolean, paramInt);
/*     */ 
/*     */     
/* 111 */     resetTimer(this.m_engine.getContext());
/*     */     
/* 113 */     return l;
/*     */   }
/*     */ 
/*     */   
/*     */   public String getRegisteredNotifications() {
/* 118 */     long[] arrayOfLong = getNotificationIds(this.m_engine.getContext());
/*     */     
/* 120 */     if (arrayOfLong == null)
/*     */     {
/* 122 */       return null;
/*     */     }
/*     */     
/* 125 */     String str = "";
/* 126 */     for (byte b = 0; b < arrayOfLong.length; b++) {
/*     */       
/* 128 */       if (b == 0) {
/* 129 */         str = str + arrayOfLong[b];
/*     */       } else {
/* 131 */         str = str + "," + arrayOfLong[b];
/*     */       } 
/*     */     } 
/* 134 */     return str;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean getNotificationDetails(long paramLong) {
/* 139 */     SQLiteDatabase sQLiteDatabase = null;
/*     */     
/*     */     try {
/* 142 */       sQLiteDatabase = (new DBHelper(this.m_engine.getContext())).getReadableDatabase();
/*     */ 
/*     */       
/* 145 */       Cursor cursor = sQLiteDatabase.query("notification", new String[] { "body", "action", "info", "time", "play_sound", "badge" }, String.format("%s = %d", new Object[] { "id", Long.valueOf(paramLong) }), null, null, null, null);
/*     */       
/* 147 */       if (cursor.getCount() == 0) {
/* 148 */         return false;
/*     */       }
/* 150 */       cursor.moveToFirst();
/*     */       
/* 152 */       String str1 = cursor.getString(0);
/* 153 */       String str2 = cursor.getString(1);
/* 154 */       String str3 = cursor.getString(2);
/* 155 */       long l = cursor.getLong(3);
/* 156 */       boolean bool = (cursor.getInt(4) != 0) ? true : false;
/* 157 */       int i = cursor.getInt(5);
/*     */       
/* 159 */       cursor.close();
/* 160 */       sQLiteDatabase.close();
/*     */       
/* 162 */       return doReturnNotificationDetails(str1, str2, str3, l, bool, i);
/*     */     }
/* 164 */     catch (Exception exception) {
/*     */       
/* 166 */       Log.i("revandroid.NotificationModule", exception.toString());
/* 167 */       return false;
/*     */     } 
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean cancelLocalNotification(long paramLong) {
/* 173 */     removeNotification(this.m_engine.getContext(), paramLong);
/* 174 */     resetTimer(this.m_engine.getContext());
/* 175 */     return true;
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean cancelAllLocalNotifications() {
/* 180 */     long[] arrayOfLong = getNotificationIds(this.m_engine.getContext());
/* 181 */     if (arrayOfLong == null) {
/* 182 */       return false;
/*     */     }
/* 184 */     for (byte b = 0; b < arrayOfLong.length; b++) {
/* 185 */       removeNotification(this.m_engine.getContext(), arrayOfLong[b]);
/*     */     }
/* 187 */     resetTimer(this.m_engine.getContext());
/* 188 */     return true;
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public void dispatchNotifications() {
/* 195 */     SQLiteDatabase sQLiteDatabase = null;
/*     */     
/*     */     try {
/* 198 */       sQLiteDatabase = (new DBHelper(this.m_engine.getContext())).getWritableDatabase();
/*     */       
/* 200 */       long l = System.currentTimeMillis();
/*     */ 
/*     */ 
/*     */       
/* 204 */       Cursor cursor = sQLiteDatabase.query("notification", new String[] { "type", "info" }, String.format("%s < %d", new Object[] { "time", Long.valueOf(l) }), null, null, null, "time");
/* 205 */       cursor.moveToFirst();
/* 206 */       while (!cursor.isAfterLast()) {
/*     */         
/* 208 */         int i = cursor.getInt(0);
/* 209 */         String str = cursor.getString(1);
/*     */         
/* 211 */         if (i == 1) {
/* 212 */           doLocalNotification(str);
/* 213 */         } else if (i == 2) {
/* 214 */           doRemoteNotification(str);
/*     */         } 
/* 216 */         cursor.moveToNext();
/*     */       } 
/* 218 */       cursor.close();
/*     */       
/* 220 */       sQLiteDatabase.delete("notification", String.format("%s < %d", new Object[] { "time", Long.valueOf(l) }), null);
/* 221 */       sQLiteDatabase.close();
/*     */ 
/*     */       
/* 224 */       resetTimer(this.m_engine.getContext());
/*     */ 
/*     */       
/* 227 */       NotificationManager notificationManager = (NotificationManager)this.m_engine.getContext().getSystemService("notification");
/* 228 */       notificationManager.cancelAll();
/*     */       
/* 230 */       this.m_engine.wakeEngineThread();
/*     */     }
/* 232 */     catch (Exception exception) {}
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   protected static long getEarliestNotificationTime(Context paramContext) {
/* 242 */     long l = Long.MAX_VALUE;
/*     */     
/* 244 */     SQLiteDatabase sQLiteDatabase = null;
/*     */ 
/*     */     
/*     */     try {
/* 248 */       sQLiteDatabase = (new DBHelper(paramContext)).getReadableDatabase();
/*     */ 
/*     */       
/* 251 */       Cursor cursor = sQLiteDatabase.rawQuery(String.format("SELECT min(%s) FROM %s WHERE NOT %s", new Object[] { "time", "notification", "shown" }), null);
/*     */       
/* 253 */       cursor.moveToFirst();
/* 254 */       if (!cursor.isNull(0)) {
/* 255 */         l = cursor.getLong(0);
/*     */       }
/* 257 */       cursor.close();
/* 258 */       sQLiteDatabase.close();
/*     */     }
/* 260 */     catch (Exception exception) {
/*     */       
/* 262 */       Log.i("revandroid.NotificationModule", exception.toString());
/*     */     } 
/*     */     
/* 265 */     return l;
/*     */   }
/*     */ 
/*     */   
/*     */   protected static long[] getNotificationIds(Context paramContext) {
/* 270 */     long[] arrayOfLong = null;
/*     */     
/* 272 */     SQLiteDatabase sQLiteDatabase = null;
/*     */     
/*     */     try {
/* 275 */       sQLiteDatabase = (new DBHelper(paramContext)).getReadableDatabase();
/*     */ 
/*     */       
/* 278 */       Cursor cursor = sQLiteDatabase.query("notification", new String[] { "id" }, null, null, null, null, "id");
/*     */ 
/*     */       
/* 281 */       arrayOfLong = new long[cursor.getCount()];
/* 282 */       byte b = 0;
/*     */       
/* 284 */       cursor.moveToFirst();
/* 285 */       while (!cursor.isAfterLast()) {
/*     */         
/* 287 */         arrayOfLong[b] = cursor.getLong(0);
/* 288 */         b++;
/* 289 */         cursor.moveToNext();
/*     */       } 
/* 291 */       cursor.close();
/* 292 */       sQLiteDatabase.close();
/*     */     }
/* 294 */     catch (Exception exception) {
/*     */       
/* 296 */       return null;
/*     */     } 
/*     */     
/* 299 */     return arrayOfLong;
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   protected static long insertNotification(Context paramContext, int paramInt1, long paramLong, String paramString1, String paramString2, String paramString3, boolean paramBoolean, int paramInt2) {
/*     */     try {
/* 307 */       ContentValues contentValues = new ContentValues();
/*     */       
/* 309 */       contentValues.put("type", Integer.valueOf(paramInt1));
/* 310 */       contentValues.put("time", Long.valueOf(paramLong));
/* 311 */       contentValues.put("body", paramString1);
/* 312 */       contentValues.put("action", paramString2);
/* 313 */       contentValues.put("info", paramString3);
/* 314 */       contentValues.put("play_sound", Boolean.valueOf(paramBoolean));
/* 315 */       contentValues.put("badge", Integer.valueOf(paramInt2));
/*     */ 
/*     */       
/* 318 */       SQLiteDatabase sQLiteDatabase = (new DBHelper(paramContext)).getWritableDatabase();
/*     */ 
/*     */       
/* 321 */       long l = sQLiteDatabase.insert("notification", null, contentValues);
/* 322 */       sQLiteDatabase.close();
/*     */       
/* 324 */       return l;
/*     */     }
/* 326 */     catch (Exception exception) {
/*     */       
/* 328 */       return -1L;
/*     */     } 
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   protected static void removeNotification(Context paramContext, long paramLong) {
/* 335 */     NotificationManager notificationManager = (NotificationManager)paramContext.getSystemService("notification");
/* 336 */     notificationManager.cancel((int)paramLong);
/*     */ 
/*     */ 
/*     */     
/*     */     try {
/* 341 */       SQLiteDatabase sQLiteDatabase = (new DBHelper(paramContext)).getWritableDatabase();
/* 342 */       sQLiteDatabase.delete("notification", String.format("%s = %d", new Object[] { "id", Long.valueOf(paramLong) }), null);
/* 343 */       sQLiteDatabase.close();
/*     */     }
/* 345 */     catch (Exception exception) {}
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
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   static class DBHelper
/*     */     extends SQLiteOpenHelper
/*     */   {
/*     */     DBHelper(Context param1Context) {
/* 370 */       super(param1Context, "lc_notification.db", null, 1);
/*     */     }
/*     */ 
/*     */     
/*     */     public void onCreate(SQLiteDatabase param1SQLiteDatabase) {
/* 375 */       String str = "CREATE TABLE notification (id INTEGER PRIMARY KEY,type INTEGER,time INTEGER,body VARCHAR,action VARCHAR,info VARCHAR,play_sound BOOLEAN,badge INTEGER,shown BOOLEAN DEFAULT 0);";
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */       
/* 387 */       param1SQLiteDatabase.execSQL(str);
/*     */     }
/*     */ 
/*     */     
/*     */     public void onUpgrade(SQLiteDatabase param1SQLiteDatabase, int param1Int1, int param1Int2) {
/* 392 */       param1SQLiteDatabase.execSQL("DROP TABLE IF EXISTS notification");
/* 393 */       onCreate(param1SQLiteDatabase);
/*     */     }
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public static boolean onReceive(Context paramContext, Intent paramIntent) {
/* 401 */     if (paramIntent.getAction().equals("com.runrev.android.DISPATCH_NOTIFICATIONS")) {
/*     */       
/* 403 */       if (Engine.isRunning()) {
/*     */ 
/*     */         
/* 406 */         Engine.getEngine().post(new Runnable()
/*     */             {
/*     */               public void run() {
/* 409 */                 Engine.getEngine().dispatchNotifications();
/*     */               }
/*     */             });
/*     */       }
/*     */       else {
/*     */         
/* 415 */         setupStatusBarNotification(paramContext);
/*     */       } 
/*     */       
/* 418 */       return true;
/*     */     } 
/* 420 */     if (paramIntent.getAction().equals("com.runrev.android.CANCEL_NOTIFICATION")) {
/*     */       
/* 422 */       if (!Engine.isRunning()) {
/*     */         
/* 424 */         int i = paramIntent.getIntExtra("id", -1);
/* 425 */         if (i != -1)
/*     */         {
/* 427 */           removeNotification(paramContext, i);
/*     */         }
/*     */       } 
/* 430 */       return true;
/*     */     } 
/*     */     
/* 433 */     return false;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public static void setupStatusBarNotification(Context paramContext) {
/*     */     try {
/* 440 */       SQLiteDatabase sQLiteDatabase = (new DBHelper(paramContext)).getReadableDatabase();
/*     */       
/* 442 */       long l = System.currentTimeMillis();
/*     */ 
/*     */ 
/*     */       
/* 446 */       Cursor cursor = sQLiteDatabase.query("notification", new String[] { "id", "body", "action", "play_sound", "badge" }, String.format("%s < %d AND NOT %s", new Object[] { "time", Long.valueOf(l), "shown" }), null, null, null, "time");
/* 447 */       cursor.moveToFirst();
/*     */       
/* 449 */       boolean bool = false;
/*     */       
/* 451 */       while (!cursor.isAfterLast()) {
/*     */         
/* 453 */         bool = true;
/*     */         
/* 455 */         int i = cursor.getInt(0);
/* 456 */         String str1 = cursor.getString(1);
/* 457 */         String str2 = cursor.getString(2);
/* 458 */         boolean bool1 = (0 != cursor.getInt(3)) ? true : false;
/* 459 */         int j = cursor.getInt(4);
/*     */         
/* 461 */         showStatusBarNotification(paramContext, i, str1, str2, bool1, j);
/*     */         
/* 463 */         cursor.moveToNext();
/*     */       } 
/*     */       
/* 466 */       cursor.close();
/* 467 */       sQLiteDatabase.close();
/*     */ 
/*     */       
/* 470 */       if (bool)
/*     */       {
/* 472 */         ContentValues contentValues = new ContentValues();
/* 473 */         contentValues.put("shown", Boolean.valueOf(true));
/*     */         
/* 475 */         sQLiteDatabase = (new DBHelper(paramContext)).getWritableDatabase();
/* 476 */         sQLiteDatabase.update("notification", contentValues, String.format("%s < %d", new Object[] { "time", Long.valueOf(l) }), null);
/* 477 */         sQLiteDatabase.close();
/*     */         
/* 479 */         resetTimer(paramContext);
/*     */       }
/*     */     
/* 482 */     } catch (Exception exception) {}
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   private static PendingIntent createNotificationContentIntent(Context paramContext) {
/* 490 */     Class<?> clazz = null;
/*     */     
/* 492 */     String str = paramContext.getPackageName() + ".mblandroid";
/*     */     
/*     */     try {
/* 495 */       Class<?> clazz1 = Class.forName(str);
/* 496 */       clazz = clazz1;
/*     */     }
/* 498 */     catch (Exception exception) {
/*     */       
/* 500 */       clazz = null;
/*     */     } 
/*     */     
/* 503 */     Intent intent = new Intent(paramContext, clazz);
/*     */     
/* 505 */     return PendingIntent.getActivity(paramContext, 0, intent, 0);
/*     */   }
/*     */ 
/*     */   
/*     */   private static PendingIntent createNotificationCancelIntent(Context paramContext, int paramInt) {
/* 510 */     Intent intent = new Intent(paramContext, getReceiverClass(paramContext));
/* 511 */     intent.setAction("com.runrev.android.CANCEL_NOTIFICATION");
/* 512 */     intent.putExtra("id", paramInt);
/*     */     
/* 514 */     return PendingIntent.getBroadcast(paramContext, 0, intent, 0);
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public static void showStatusBarNotification(Context paramContext, int paramInt1, String paramString1, String paramString2, boolean paramBoolean, int paramInt2) {
/* 521 */     int i = paramContext.getResources().getIdentifier("drawable/notify_icon", null, paramContext.getPackageName());
/*     */     
/* 523 */     NotificationManager notificationManager = (NotificationManager)paramContext.getSystemService("notification");
/*     */     
/* 525 */     Notification.Builder builder = new Notification.Builder(paramContext);
/* 526 */     builder.setSmallIcon(i);
/* 527 */     builder.setAutoCancel(true);
/* 528 */     builder.setNumber(paramInt2);
/*     */     
/* 530 */     if (paramBoolean) {
/* 531 */       builder.setDefaults(1);
/*     */     }
/* 533 */     builder.setContentIntent(createNotificationContentIntent(paramContext));
/* 534 */     builder.setContentText(paramString1);
/* 535 */     builder.setContentTitle(paramString2);
/*     */ 
/*     */ 
/*     */     
/* 539 */     if (Build.VERSION.SDK_INT >= 26) {
/*     */       
/* 541 */       String str1 = "android_channel_id";
/* 542 */       String str2 = "Notification Channel";
/* 543 */       String str3 = "My Notifications";
/*     */       
/* 545 */       NotificationChannel notificationChannel = new NotificationChannel(str1, str3, 5);
/*     */ 
/*     */       
/* 548 */       notificationChannel.setDescription(str2);
/* 549 */       notificationChannel.enableLights(true);
/* 550 */       notificationChannel.enableVibration(true);
/* 551 */       notificationManager.createNotificationChannel(notificationChannel);
/*     */       
/* 553 */       builder.setChannelId(str1);
/*     */     } 
/*     */     
/* 556 */     builder.setDeleteIntent(createNotificationCancelIntent(paramContext, paramInt1));
/*     */     
/* 558 */     notificationManager.notify(paramInt1, builder.build());
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/* 565 */   private static String s_registration_id = null;
/*     */ 
/*     */   
/*     */   public static String getRemoteNotificationId() {
/* 569 */     return s_registration_id;
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public boolean registerForRemoteNotifications(String paramString) {
/*     */     try {
/* 576 */       Intent intent = new Intent("com.google.android.c2dm.intent.REGISTER");
/*     */ 
/*     */       
/* 579 */       intent.setPackage("com.google.android.gms");
/*     */       
/* 581 */       intent.putExtra("app", (Parcelable)PendingIntent.getBroadcast(this.m_engine.getContext(), 0, new Intent(), 0));
/* 582 */       intent.putExtra("sender", paramString);
/* 583 */       this.m_engine.getContext().startService(intent);
/*     */     }
/* 585 */     catch (SecurityException securityException) {
/*     */ 
/*     */       
/* 588 */       return false;
/*     */     } 
/*     */     
/* 591 */     return true;
/*     */   }
/*     */ 
/*     */   
/*     */   public static void handleRemoteRegistrationError(Context paramContext, String paramString) {
/* 596 */     if (Engine.isRunning()) {
/*     */       
/* 598 */       final String t_error = paramString;
/* 599 */       Engine.getEngine().post(new Runnable()
/*     */           {
/*     */             public void run() {
/* 602 */               NotificationModule.doRemoteRegistrationError(t_error);
/* 603 */               Engine.getEngine().wakeEngineThread();
/*     */             }
/*     */           });
/*     */     } 
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public static void handleRemoteRegistration(Context paramContext, String paramString) {
/* 612 */     s_registration_id = paramString;
/* 613 */     if (Engine.isRunning())
/*     */     {
/* 615 */       Engine.getEngine().post(new Runnable()
/*     */           {
/*     */             public void run() {
/* 618 */               NotificationModule.doRemoteRegistration(NotificationModule.s_registration_id);
/* 619 */               Engine.getEngine().wakeEngineThread();
/*     */             }
/*     */           });
/*     */     }
/*     */   }
/*     */ 
/*     */   
/*     */   public static void handleRemoteUnregistration(Context paramContext) {
/* 627 */     handleRemoteRegistration(paramContext, null);
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public static void handleRemoteMessage(Context paramContext, String paramString1, String paramString2, String paramString3, boolean paramBoolean, int paramInt) {
/* 633 */     long l = insertNotification(paramContext, 2, System.currentTimeMillis(), paramString1, paramString2, paramString3, paramBoolean, paramInt);
/* 634 */     resetTimer(paramContext);
/*     */   }
/*     */   
/*     */   public static native boolean doReturnNotificationDetails(String paramString1, String paramString2, String paramString3, long paramLong, boolean paramBoolean, int paramInt);
/*     */   
/*     */   public static native void doLocalNotification(String paramString);
/*     */   
/*     */   public static native void doRemoteNotification(String paramString);
/*     */   
/*     */   public static native void doRemoteRegistrationError(String paramString);
/*     */   
/*     */   public static native void doRemoteRegistration(String paramString);
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/NotificationModule.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */