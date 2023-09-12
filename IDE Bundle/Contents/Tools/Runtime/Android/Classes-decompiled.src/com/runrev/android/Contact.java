/*     */ package com.runrev.android;
/*     */ 
/*     */ import android.app.Activity;
/*     */ import android.content.ContentProviderOperation;
/*     */ import android.content.ContentProviderResult;
/*     */ import android.content.ContentUris;
/*     */ import android.content.ContentValues;
/*     */ import android.content.Intent;
/*     */ import android.database.Cursor;
/*     */ import android.net.Uri;
/*     */ import android.os.Build;
/*     */ import android.provider.ContactsContract;
/*     */ import android.util.Log;
/*     */ import java.util.ArrayList;
/*     */ import java.util.HashMap;
/*     */ import java.util.List;
/*     */ import java.util.Map;
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ public class Contact
/*     */ {
/*     */   public static final String TAG = "revandroid.Contact";
/*     */   private static final ContactCategory[] s_property_categories;
/*     */   private static final ContactCategory s_email_category;
/*     */   private static final ContactCategory s_phone_category;
/*     */   private static final ContactCategory s_address_category;
/*     */   private static final int PICK_CONTACT_RESULT = 6;
/*     */   private static final int CREATE_CONTACT_RESULT = 7;
/*     */   private static final int UPDATE_CONTACT_RESULT = 8;
/*     */   private static final int SHOW_CONTACT_RESULT = 9;
/*     */   protected Engine m_engine;
/*     */   protected Activity m_activity;
/*     */   
/*     */   static class Pair<Tleft, Tright>
/*     */   {
/*     */     public final Tleft left;
/*     */     public final Tright right;
/*     */     
/*     */     Pair(Tleft param1Tleft, Tright param1Tright) {
/*  42 */       this.left = param1Tleft;
/*  43 */       this.right = param1Tright;
/*     */     }
/*     */   }
/*     */ 
/*     */   
/*     */   static class ContactCategory
/*     */   {
/*     */     public final String name;
/*     */     public final String content_type;
/*     */     public final List<Contact.Pair<String, String>> properties;
/*     */     public final List<Contact.Pair<String, Integer>> label_map;
/*     */     public final String id_column;
/*     */     public final String label_column;
/*     */     
/*     */     ContactCategory(String param1String1, String param1String2, List<Contact.Pair<String, String>> param1List, List<Contact.Pair<String, Integer>> param1List1, String param1String3, String param1String4) {
/*  58 */       this.name = param1String1;
/*  59 */       this.content_type = param1String2;
/*  60 */       this.properties = param1List;
/*  61 */       this.label_map = param1List1;
/*  62 */       this.id_column = param1String3;
/*  63 */       this.label_column = param1String4;
/*     */     }
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   static {
/*  75 */     ArrayList<Pair<String, Integer>> arrayList1 = new ArrayList();
/*  76 */     arrayList1.add(new Pair<>("home", Integer.valueOf(1)));
/*  77 */     arrayList1.add(new Pair<>("work", Integer.valueOf(2)));
/*  78 */     arrayList1.add(new Pair<>("other", Integer.valueOf(3)));
/*     */     
/*  80 */     ArrayList<Pair<String, Integer>> arrayList2 = new ArrayList();
/*  81 */     arrayList2.add(new Pair<>("home", Integer.valueOf(1)));
/*  82 */     arrayList2.add(new Pair<>("work", Integer.valueOf(3)));
/*  83 */     arrayList2.add(new Pair<>("other", Integer.valueOf(7)));
/*  84 */     arrayList2.add(new Pair<>("mobile", Integer.valueOf(2)));
/*  85 */     arrayList2.add(new Pair<>("main", Integer.valueOf(12)));
/*  86 */     arrayList2.add(new Pair<>("homefax", Integer.valueOf(5)));
/*  87 */     arrayList2.add(new Pair<>("workfax", Integer.valueOf(4)));
/*  88 */     arrayList2.add(new Pair<>("otherfax", Integer.valueOf(13)));
/*  89 */     arrayList2.add(new Pair<>("pager", Integer.valueOf(6)));
/*     */     
/*  91 */     ArrayList<Pair<String, Integer>> arrayList3 = new ArrayList();
/*  92 */     arrayList3.add(new Pair<>("home", Integer.valueOf(1)));
/*  93 */     arrayList3.add(new Pair<>("work", Integer.valueOf(2)));
/*  94 */     arrayList3.add(new Pair<>("other", Integer.valueOf(3)));
/*     */ 
/*     */     
/*  97 */     ArrayList<Pair<String, String>> arrayList4 = new ArrayList();
/*  98 */     arrayList4.add(new Pair<>("firstname", "data2"));
/*  99 */     arrayList4.add(new Pair<>("middlename", "data5"));
/* 100 */     arrayList4.add(new Pair<>("lastname", "data3"));
/* 101 */     arrayList4.add(new Pair<>("prefix", "data4"));
/* 102 */     arrayList4.add(new Pair<>("suffix", "data6"));
/* 103 */     arrayList4.add(new Pair<>("firstnamephonetic", "data7"));
/* 104 */     arrayList4.add(new Pair<>("middlenamephonetic", "data8"));
/* 105 */     arrayList4.add(new Pair<>("lastnamephonetic", "data9"));
/*     */     
/* 107 */     ArrayList<Pair<String, String>> arrayList5 = new ArrayList();
/* 108 */     arrayList5.add(new Pair<>("nickname", "data1"));
/*     */     
/* 110 */     ArrayList<Pair<String, String>> arrayList6 = new ArrayList();
/* 111 */     arrayList6.add(new Pair<>("organization", "data1"));
/* 112 */     arrayList6.add(new Pair<>("jobtitle", "data4"));
/* 113 */     arrayList6.add(new Pair<>("department", "data5"));
/*     */     
/* 115 */     ArrayList<Pair<String, String>> arrayList7 = new ArrayList();
/* 116 */     arrayList7.add(new Pair<>("note", "data1"));
/*     */     
/* 118 */     ArrayList<Pair<String, String>> arrayList8 = new ArrayList();
/* 119 */     arrayList8.add(new Pair<>("email", "data1"));
/*     */     
/* 121 */     ArrayList<Pair<String, String>> arrayList9 = new ArrayList();
/* 122 */     arrayList9.add(new Pair<>("phone", "data1"));
/*     */     
/* 124 */     ArrayList<Pair<String, String>> arrayList10 = new ArrayList();
/* 125 */     arrayList10.add(new Pair<>("street", "data4"));
/* 126 */     arrayList10.add(new Pair<>("city", "data7"));
/* 127 */     arrayList10.add(new Pair<>("state", "data8"));
/* 128 */     arrayList10.add(new Pair<>("zip", "data9"));
/* 129 */     arrayList10.add(new Pair<>("country", "data10"));
/*     */ 
/*     */     
/* 132 */     ContactCategory contactCategory1 = new ContactCategory(null, "vnd.android.cursor.item/name", arrayList4, null, "contact_id", null);
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 137 */     ContactCategory contactCategory2 = new ContactCategory(null, "vnd.android.cursor.item/nickname", arrayList5, null, "contact_id", null);
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 142 */     ContactCategory contactCategory3 = new ContactCategory(null, "vnd.android.cursor.item/organization", arrayList6, null, "contact_id", null);
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 147 */     ContactCategory contactCategory4 = new ContactCategory(null, "vnd.android.cursor.item/note", arrayList7, null, "contact_id", null);
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 152 */     s_email_category = new ContactCategory("email", "vnd.android.cursor.item/email_v2", arrayList8, arrayList1, "contact_id", "data2");
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 157 */     s_phone_category = new ContactCategory("phone", "vnd.android.cursor.item/phone_v2", arrayList9, arrayList2, "contact_id", "data2");
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 162 */     s_address_category = new ContactCategory("address", "vnd.android.cursor.item/postal-address_v2", arrayList10, arrayList3, "contact_id", "data2");
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 168 */     s_property_categories = new ContactCategory[] { contactCategory1, contactCategory2, contactCategory3, contactCategory4, s_email_category, s_phone_category, s_address_category };
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
/*     */   public Contact(Engine paramEngine, Activity paramActivity) {
/* 181 */     this.m_engine = paramEngine;
/* 182 */     this.m_activity = paramActivity;
/*     */   }
/*     */ 
/*     */   
/*     */   public void pickContact() {
/* 187 */     boolean bool = false;
/* 188 */     Intent intent = new Intent("android.intent.action.PICK", ContactsContract.Contacts.CONTENT_URI);
/* 189 */     this.m_activity.startActivityForResult(intent, 6);
/*     */   }
/*     */ 
/*     */   
/*     */   public void showContact(int paramInt) {
/* 194 */     boolean bool = false;
/* 195 */     Intent intent = new Intent("android.intent.action.VIEW", ContentUris.withAppendedId(ContactsContract.Contacts.CONTENT_URI, paramInt));
/* 196 */     this.m_activity.startActivityForResult(intent, 9);
/*     */   }
/*     */ 
/*     */   
/*     */   public void createContact() {
/* 201 */     boolean bool = false;
/* 202 */     Intent intent = new Intent("android.intent.action.INSERT", ContactsContract.Contacts.CONTENT_URI);
/* 203 */     this.m_activity.startActivityForResult(intent, 7);
/*     */   }
/*     */ 
/*     */   
/*     */   private ContentValues valuesForCategory(Map paramMap, ContactCategory paramContactCategory) {
/* 208 */     ContentValues contentValues = new ContentValues();
/*     */     
/* 210 */     for (Pair<String, String> pair : paramContactCategory.properties) {
/*     */       
/* 212 */       Object object = paramMap.get(pair.left);
/* 213 */       if (object instanceof String)
/*     */       {
/* 215 */         contentValues.put((String)pair.right, (String)object);
/*     */       }
/*     */     } 
/* 218 */     if (contentValues.size() > 0) {
/*     */       
/* 220 */       contentValues.put("mimetype", paramContactCategory.content_type);
/* 221 */       return contentValues;
/*     */     } 
/* 223 */     return null;
/*     */   }
/*     */ 
/*     */   
/*     */   private ArrayList<ContentValues> contactToContentValues(Map paramMap) {
/* 228 */     ArrayList<ContentValues> arrayList = new ArrayList();
/*     */ 
/*     */     
/* 231 */     for (ContactCategory contactCategory : s_property_categories) {
/*     */ 
/*     */       
/* 234 */       if (contactCategory.label_map == null) {
/*     */         
/* 236 */         ContentValues contentValues = valuesForCategory(paramMap, contactCategory);
/* 237 */         if (contentValues != null) {
/* 238 */           arrayList.add(contentValues);
/*     */         }
/*     */       } else {
/*     */         
/* 242 */         Object object = paramMap.get(contactCategory.name);
/* 243 */         if (object instanceof Map) {
/*     */           
/* 245 */           Map map = (Map)object;
/*     */           
/* 247 */           for (Pair<String, Integer> pair : contactCategory.label_map) {
/*     */             
/* 249 */             Object object1 = map.get(pair.left);
/* 250 */             if (object1 instanceof Map) {
/*     */               
/* 252 */               Map map1 = (Map)object1;
/*     */               
/* 254 */               for (String str : map1.values()) {
/*     */                 
/* 256 */                 ContentValues contentValues = null;
/* 257 */                 if (contactCategory.properties.size() == 1) {
/*     */ 
/*     */                   
/* 260 */                   if (str instanceof String)
/*     */                   {
/* 262 */                     contentValues = new ContentValues();
/* 263 */                     contentValues.put((String)((Pair)contactCategory.properties.get(0)).right, str);
/* 264 */                     contentValues.put("mimetype", contactCategory.content_type);
/*     */                   
/*     */                   }
/*     */ 
/*     */                 
/*     */                 }
/* 270 */                 else if (str instanceof Map) {
/* 271 */                   contentValues = valuesForCategory((Map)str, contactCategory);
/*     */                 } 
/*     */                 
/* 274 */                 if (contentValues != null) {
/*     */                   
/* 276 */                   contentValues.put(contactCategory.label_column, (Integer)pair.right);
/* 277 */                   arrayList.add(contentValues);
/*     */                 } 
/*     */               } 
/*     */             } 
/*     */           } 
/*     */         } 
/*     */       } 
/*     */     } 
/*     */     
/* 286 */     return arrayList;
/*     */   }
/*     */ 
/*     */   
/*     */   private void addNameToIntent(Map paramMap, Intent paramIntent) {
/* 291 */     String str = "";
/*     */     
/* 293 */     Object object = paramMap.get("firstname");
/* 294 */     if (object instanceof String)
/* 295 */       str = str + " " + (String)object; 
/* 296 */     object = paramMap.get("middlename");
/* 297 */     if (object instanceof String)
/* 298 */       str = str + " " + (String)object; 
/* 299 */     object = paramMap.get("lastname");
/* 300 */     if (object instanceof String) {
/* 301 */       str = str + " " + (String)object;
/*     */     }
/* 303 */     if (str.length() > 0) {
/* 304 */       paramIntent.putExtra("name", str);
/*     */     }
/* 306 */     str = "";
/* 307 */     object = paramMap.get("firstnamephonetic");
/* 308 */     if (object instanceof String)
/* 309 */       str = str + " " + (String)object; 
/* 310 */     object = paramMap.get("middlenamephonetic");
/* 311 */     if (object instanceof String)
/* 312 */       str = str + " " + (String)object; 
/* 313 */     object = paramMap.get("lastnamephonetic");
/* 314 */     if (object instanceof String) {
/* 315 */       str = str + " " + (String)object;
/*     */     }
/* 317 */     if (str.length() > 0) {
/* 318 */       paramIntent.putExtra("phonetic_name", str);
/*     */     }
/*     */   }
/*     */   
/*     */   private void addFirstAddressToIntent(Map paramMap, Intent paramIntent) {
/* 323 */     Object object = paramMap.get("address");
/* 324 */     if (!(object instanceof Map)) {
/*     */       return;
/*     */     }
/* 327 */     Map map = (Map)object;
/* 328 */     for (Pair<String, Integer> pair : s_address_category.label_map) {
/*     */       
/* 330 */       Object object1 = map.get(pair.left);
/* 331 */       if (object1 instanceof Map) {
/*     */         
/* 333 */         Map map1 = (Map)object1;
/* 334 */         Object object2 = map1.get("1");
/* 335 */         if (object2 instanceof Map) {
/*     */           
/* 337 */           addAddressToIntent((Map)object2, paramIntent, ((Integer)pair.right).intValue());
/*     */           return;
/*     */         } 
/*     */       } 
/*     */     } 
/*     */   }
/*     */ 
/*     */   
/*     */   private void addAddressToIntent(Map paramMap, Intent paramIntent, int paramInt) {
/* 346 */     String str1 = "";
/*     */     
/* 348 */     Object object = paramMap.get("street");
/* 349 */     if (object instanceof String) {
/* 350 */       str1 = str1 + (String)object + "\n";
/*     */     }
/* 352 */     String str2 = "";
/* 353 */     object = paramMap.get("city");
/* 354 */     if (object instanceof String)
/* 355 */       str2 = str2 + (String)object; 
/* 356 */     object = paramMap.get("state");
/* 357 */     if (object instanceof String) {
/*     */       
/* 359 */       if (str2.length() > 0)
/* 360 */         str2 = str2 + ", "; 
/* 361 */       str2 = str2 + (String)object;
/*     */     } 
/* 363 */     object = paramMap.get("zip");
/* 364 */     if (object instanceof String) {
/*     */       
/* 366 */       if (str2.length() > 0)
/* 367 */         str2 = str2 + " "; 
/* 368 */       str2 = str2 + (String)object;
/*     */     } 
/*     */     
/* 371 */     if (str2.length() > 0) {
/* 372 */       str1 = str1 + str2 + "\n";
/*     */     }
/* 374 */     object = paramMap.get("country");
/* 375 */     if (object instanceof String) {
/* 376 */       str1 = str1 + (String)object + "\n";
/*     */     }
/* 378 */     if (str1.length() > 0) {
/*     */       
/* 380 */       paramIntent.putExtra("postal", str1);
/* 381 */       paramIntent.putExtra("postal_type", paramInt);
/* 382 */       paramIntent.putExtra("postal_isprimary", true);
/*     */     } 
/*     */   }
/*     */ 
/*     */   
/*     */   private void addCategoryToIntent(Map paramMap, ContactCategory paramContactCategory, Intent paramIntent, String[] paramArrayOfString1, String[] paramArrayOfString2, String paramString) {
/* 388 */     Object object = paramMap.get(paramContactCategory.name);
/* 389 */     if (!(object instanceof Map)) {
/*     */       return;
/*     */     }
/* 392 */     int i = paramArrayOfString1.length;
/* 393 */     byte b = 0;
/*     */     
/* 395 */     Map map = (Map)object;
/* 396 */     for (Pair<String, Integer> pair : paramContactCategory.label_map) {
/*     */       
/* 398 */       Object object1 = map.get(pair.left);
/* 399 */       if (object1 instanceof Map) {
/*     */         
/* 401 */         Map map1 = (Map)object1;
/* 402 */         byte b1 = 1;
/* 403 */         Object object2 = map1.get(String.valueOf(b1));
/* 404 */         while (object2 instanceof String) {
/*     */           
/* 406 */           paramIntent.putExtra(paramArrayOfString1[b], (String)object2);
/* 407 */           paramIntent.putExtra(paramArrayOfString2[b], ((Integer)pair.right).intValue());
/* 408 */           if (!b) {
/* 409 */             paramIntent.putExtra(paramString, true);
/*     */           }
/* 411 */           b++;
/* 412 */           if (b == i) {
/*     */             return;
/*     */           }
/* 415 */           b1++;
/* 416 */           object2 = map1.get(String.valueOf(b1));
/*     */         } 
/*     */       } 
/*     */     } 
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   private void addPreHoneycombValuesToIntent(Map paramMap, Intent paramIntent) {
/* 427 */     Object object = paramMap.get("organization");
/* 428 */     if (object instanceof String)
/* 429 */       paramIntent.putExtra("company", (String)object); 
/* 430 */     object = paramMap.get("jobtitle");
/* 431 */     if (object instanceof String) {
/* 432 */       paramIntent.putExtra("job_title", (String)object);
/*     */     }
/*     */     
/* 435 */     object = paramMap.get("note");
/* 436 */     if (object instanceof String) {
/* 437 */       paramIntent.putExtra("notes", (String)object);
/*     */     }
/*     */     
/* 440 */     addCategoryToIntent(paramMap, s_email_category, paramIntent, new String[] { "email", "secondary_email", "tertiary_email" }, new String[] { "email_type", "secondary_email_type", "tertiary_email_type" }, "email_isprimary");
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 450 */     addCategoryToIntent(paramMap, s_phone_category, paramIntent, new String[] { "phone", "secondary_phone", "tertiary_phone" }, new String[] { "phone_type", "secondary_phone_type", "tertiary_phone_type" }, "phone_isprimary");
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
/*     */   public void updateContact(Map paramMap, String paramString1, String paramString2, String paramString3) {
/* 462 */     Intent intent = new Intent("android.intent.action.INSERT", ContactsContract.Contacts.CONTENT_URI);
/* 463 */     intent.setType("vnd.android.cursor.dir/raw_contact");
/*     */ 
/*     */     
/* 466 */     addNameToIntent(paramMap, intent);
/* 467 */     addFirstAddressToIntent(paramMap, intent);
/*     */ 
/*     */     
/* 470 */     if (Build.VERSION.SDK_INT < 11) {
/* 471 */       addPreHoneycombValuesToIntent(paramMap, intent);
/*     */     }
/*     */     else {
/*     */       
/* 475 */       ArrayList<ContentValues> arrayList = contactToContentValues(paramMap);
/*     */       
/* 477 */       if (arrayList.size() > 0)
/*     */       {
/* 479 */         intent.putParcelableArrayListExtra("data", arrayList);
/*     */       }
/*     */     } 
/*     */ 
/*     */     
/* 484 */     this.m_activity.startActivityForResult(intent, 7);
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   private void addCursorDataToContact(Map<Tleft, String> paramMap, Cursor paramCursor, List<Pair<String, String>> paramList) {
/* 490 */     for (Pair<String, String> pair : paramList) {
/*     */       
/* 492 */       int i = paramCursor.getColumnIndex((String)pair.right);
/* 493 */       if (i != -1) {
/*     */         
/* 495 */         String str = paramCursor.getString(i);
/* 496 */         if (str != null)
/*     */         {
/* 498 */           paramMap.put(pair.left, str);
/*     */         }
/*     */       } 
/*     */     } 
/*     */   }
/*     */ 
/*     */   
/*     */   public Map getContactData(int paramInt) {
/* 506 */     HashMap<Object, Object> hashMap = new HashMap<>();
/*     */     
/* 508 */     for (ContactCategory contactCategory : s_property_categories) {
/*     */       
/* 510 */       if (contactCategory.label_map == null) {
/*     */         
/* 512 */         String str = "mimetype = '" + contactCategory.content_type + "' AND " + contactCategory.id_column + " = " + paramInt;
/* 513 */         Cursor cursor = this.m_activity.getContentResolver().query(ContactsContract.Data.CONTENT_URI, null, str, null, null);
/* 514 */         if (cursor != null && cursor.moveToFirst()) {
/* 515 */           addCursorDataToContact(hashMap, cursor, contactCategory.properties);
/*     */         }
/*     */       } else {
/*     */         
/* 519 */         HashMap<Object, Object> hashMap1 = new HashMap<>();
/*     */         
/* 521 */         for (Pair<String, Integer> pair : contactCategory.label_map) {
/*     */           
/* 523 */           String str = "mimetype = '" + contactCategory.content_type + "' AND " + contactCategory.id_column + " = " + paramInt + " and " + contactCategory.label_column + " = " + pair.right;
/* 524 */           Cursor cursor = this.m_activity.getContentResolver().query(ContactsContract.Data.CONTENT_URI, null, str, null, null);
/* 525 */           if (cursor != null) {
/*     */             
/* 527 */             HashMap<Object, Object> hashMap2 = new HashMap<>();
/*     */             
/* 529 */             byte b = 1;
/*     */             
/* 531 */             while (cursor.moveToNext()) {
/*     */               HashMap<Object, Object> hashMap3;
/* 533 */               String str1 = null;
/*     */               
/* 535 */               if (contactCategory.properties.size() == 1) {
/*     */                 
/* 537 */                 int i = cursor.getColumnIndex((String)((Pair)contactCategory.properties.get(0)).right);
/* 538 */                 if (i != -1) {
/* 539 */                   str1 = cursor.getString(i);
/*     */                 
/*     */                 }
/*     */               }
/*     */               else {
/*     */                 
/* 545 */                 HashMap<Object, Object> hashMap4 = new HashMap<>();
/* 546 */                 addCursorDataToContact(hashMap4, cursor, contactCategory.properties);
/* 547 */                 if (hashMap4.size() > 0)
/* 548 */                   hashMap3 = hashMap4; 
/*     */               } 
/* 550 */               if (hashMap3 != null) {
/*     */                 
/* 552 */                 hashMap2.put(String.valueOf(b), hashMap3);
/* 553 */                 b++;
/*     */               } 
/*     */             } 
/* 556 */             if (hashMap2.size() > 0)
/* 557 */               hashMap1.put(pair.left, hashMap2); 
/*     */           } 
/*     */         } 
/* 560 */         if (hashMap1.size() > 0) {
/* 561 */           hashMap.put(contactCategory.name, hashMap1);
/*     */         }
/*     */       } 
/*     */     } 
/* 565 */     if (hashMap.size() > 0)
/* 566 */       return hashMap; 
/* 567 */     return null;
/*     */   }
/*     */ 
/*     */   
/*     */   public void removeContact(int paramInt) {
/* 572 */     int i = 0;
/* 573 */     Uri uri = ContentUris.withAppendedId(ContactsContract.Contacts.CONTENT_URI, paramInt);
/* 574 */     if (uri != null) {
/*     */       
/*     */       try {
/*     */         
/* 578 */         if (this.m_activity.getContentResolver().delete(uri, null, null) > 0)
/*     */         {
/* 580 */           i = paramInt;
/*     */         }
/*     */       }
/* 583 */       catch (Exception exception) {
/*     */         
/* 585 */         Log.i("revandroid", "CT removeContact - Delete exception for: " + paramInt);
/*     */       } 
/*     */     }
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   private ContentProviderOperation.Builder operationForCategory(Map paramMap, ContactCategory paramContactCategory) {
/* 594 */     ContentProviderOperation.Builder builder = ContentProviderOperation.newInsert(ContactsContract.Data.CONTENT_URI).withValueBackReference("raw_contact_id", 0).withValue("mimetype", paramContactCategory.content_type);
/*     */ 
/*     */     
/* 597 */     for (Pair<String, String> pair : paramContactCategory.properties) {
/*     */       
/* 599 */       Object object = paramMap.get(pair.left);
/* 600 */       if (object instanceof String)
/*     */       {
/* 602 */         builder = builder.withValue((String)pair.right, object);
/*     */       }
/*     */     } 
/* 605 */     return builder;
/*     */   }
/*     */ 
/*     */   
/*     */   public int addContact(Map paramMap) {
/* 610 */     ArrayList<ContentProviderOperation> arrayList = new ArrayList();
/*     */     
/* 612 */     arrayList.add(ContentProviderOperation.newInsert(ContactsContract.RawContacts.CONTENT_URI)
/* 613 */         .withValue("account_type", null)
/* 614 */         .withValue("account_name", null)
/* 615 */         .build());
/*     */ 
/*     */     
/* 618 */     for (ContactCategory contactCategory : s_property_categories) {
/*     */ 
/*     */       
/* 621 */       if (contactCategory.label_map == null) {
/*     */ 
/*     */         
/* 624 */         ContentProviderOperation.Builder builder = operationForCategory(paramMap, contactCategory);
/* 625 */         if (builder != null) {
/* 626 */           arrayList.add(builder.build());
/*     */         }
/*     */       } else {
/*     */         
/* 630 */         Object object = paramMap.get(contactCategory.name);
/* 631 */         if (object instanceof Map) {
/*     */           
/* 633 */           Map map = (Map)object;
/*     */           
/* 635 */           for (Pair<String, Integer> pair : contactCategory.label_map) {
/*     */             
/* 637 */             Object object1 = map.get(pair.left);
/* 638 */             if (object1 instanceof Map) {
/*     */               
/* 640 */               Map map1 = (Map)object1;
/*     */               
/* 642 */               for (String str : map1.values()) {
/*     */                 
/* 644 */                 ContentProviderOperation.Builder builder = null;
/* 645 */                 if (contactCategory.properties.size() == 1) {
/*     */ 
/*     */                   
/* 648 */                   if (str instanceof String)
/*     */                   {
/*     */ 
/*     */ 
/*     */                     
/* 653 */                     builder = ContentProviderOperation.newInsert(ContactsContract.Data.CONTENT_URI).withValueBackReference("raw_contact_id", 0).withValue("mimetype", contactCategory.content_type).withValue((String)((Pair)contactCategory.properties.get(0)).right, str);
/*     */ 
/*     */                   
/*     */                   }
/*     */                 
/*     */                 }
/* 659 */                 else if (str instanceof Map) {
/* 660 */                   builder = operationForCategory((Map)str, contactCategory);
/*     */                 } 
/*     */                 
/* 663 */                 if (builder != null) {
/* 664 */                   arrayList.add(builder.withValue(contactCategory.label_column, Integer.valueOf(((Integer)pair.right).intValue())).build());
/*     */                 }
/*     */               } 
/*     */             } 
/*     */           } 
/*     */         } 
/*     */       } 
/*     */     } 
/* 672 */     int i = 0;
/*     */     
/*     */     try {
/* 675 */       ContentProviderResult[] arrayOfContentProviderResult = this.m_activity.getContentResolver().applyBatch("com.android.contacts", arrayList);
/* 676 */       if (arrayOfContentProviderResult.length > 0)
/*     */       {
/* 678 */         Cursor cursor = this.m_activity.getContentResolver().query(ContactsContract.Contacts.CONTENT_URI, null, null, null, null);
/* 679 */         if (cursor.moveToLast() == true)
/*     */         {
/* 681 */           i = cursor.getInt(cursor.getColumnIndex("_id"));
/*     */         }
/*     */       }
/*     */     
/* 685 */     } catch (Exception exception) {
/*     */       
/* 687 */       Log.i("revandroid", "CT addContact - Add exception: " + exception.toString());
/*     */     } 
/*     */     
/* 690 */     return i;
/*     */   }
/*     */ 
/*     */   
/*     */   public void findContact(String paramString) {
/* 695 */     String str = null;
/* 696 */     Cursor cursor = this.m_activity.getContentResolver().query(ContactsContract.Contacts.CONTENT_URI, null, null, null, null);
/* 697 */     if (cursor.getCount() > 0)
/*     */     {
/* 699 */       while (cursor.moveToNext() == true) {
/*     */         
/* 701 */         String str1 = cursor.getString(cursor.getColumnIndex("display_name"));
/*     */         
/* 703 */         if (str1.toLowerCase().indexOf(paramString.toLowerCase()) >= 0) {
/*     */           
/* 705 */           if (str == null) {
/*     */             
/* 707 */             str = "" + cursor.getLong(cursor.getColumnIndex("_id"));
/*     */             
/*     */             continue;
/*     */           } 
/* 711 */           str = str + "," + cursor.getLong(cursor.getColumnIndex("_id"));
/*     */         } 
/*     */       } 
/*     */     }
/*     */ 
/*     */     
/* 717 */     Engine.doFindContact(str);
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/Contact.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */