/*    */ package com.runrev.android;
/*    */ 
/*    */ import android.app.Activity;
/*    */ import android.content.Intent;
/*    */ import android.util.Log;
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ public class CalendarEvents
/*    */ {
/*    */   private static final int PICK_CALENDAR_RESULT = 10;
/*    */   private static final int CREATE_CALENDAR_RESULT = 11;
/*    */   private static final int UPDATE_CALENDAR_RESULT = 12;
/*    */   private static final int SHOW_CALENDAR_RESULT = 13;
/*    */   protected Engine m_engine;
/*    */   protected Activity m_activity;
/*    */   
/*    */   public CalendarEvents(Engine paramEngine, Activity paramActivity) {
/* 41 */     Log.i("revandroid", "CT Calendar");
/* 42 */     this.m_engine = paramEngine;
/* 43 */     this.m_activity = paramActivity;
/*    */   }
/*    */ 
/*    */   
/*    */   public void showCalendarEvent(String paramString) {
/* 48 */     Log.i("revandroid", "CT showCalendarEvent: " + paramString);
/*    */   }
/*    */ 
/*    */ 
/*    */   
/*    */   public void createCalendarEvent() {
/* 54 */     Log.i("revandroid", "CT createCalendarEvent");
/* 55 */     Intent intent = new Intent("android.intent.action.EDIT");
/* 56 */     intent.setType("vnd.android.cursor.item/event");
/* 57 */     this.m_activity.startActivityForResult(intent, 11);
/*    */   }
/*    */ 
/*    */   
/*    */   public void updateCalendarEvent(String paramString) {
/* 62 */     Log.i("revandroid", "CT UpdateCalendarEvent");
/*    */   }
/*    */ 
/*    */ 
/*    */   
/*    */   public void getCalendarEventData(String paramString) {
/* 68 */     Log.i("revandroid", "CT getCalendarEventData: " + paramString);
/*    */   }
/*    */ 
/*    */ 
/*    */   
/*    */   public void removeCalendarEvent(String paramString) {
/* 74 */     Log.i("revandroid", "CT removeCalendarEvent: " + paramString);
/*    */   }
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */   
/*    */   public void addCalendarEvent(String paramString1, String paramString2, String paramString3, String paramString4, boolean paramBoolean1, boolean paramBoolean2, boolean paramBoolean3, boolean paramBoolean4, int paramInt1, int paramInt2, String paramString5, int paramInt3, int paramInt4, String paramString6) {
/* 85 */     Log.i("revandroid", "CT addCalendarEvent: " + paramString3);
/*    */   }
/*    */ 
/*    */ 
/*    */   
/*    */   public void findCalendarEvent(String paramString) {
/* 91 */     Log.i("revandroid", "CT findCalendarEvent: " + paramString);
/*    */   }
/*    */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/CalendarEvents.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */