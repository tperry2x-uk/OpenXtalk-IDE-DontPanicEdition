package com.runrev.android;

import android.app.Activity;
import android.content.Intent;
import android.view.ViewGroup;

public interface EngineApi {
  void runActivity(Intent paramIntent, ActivityResultCallback paramActivityResultCallback);
  
  Activity getActivity();
  
  ViewGroup getContainer();
  
  public static interface ActivityResultCallback {
    void handleActivityResult(int param1Int, Intent param1Intent);
  }
}


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/EngineApi.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */