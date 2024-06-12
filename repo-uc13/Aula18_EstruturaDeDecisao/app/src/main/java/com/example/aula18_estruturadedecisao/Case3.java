package com.example.aula18_estruturadedecisao;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class Case3 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_case3);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
    }

public void case3oc (View view){
    EditText inputcollect3 = findViewById(R.id.editTextInput3);
    String content3 = String.valueOf(inputcollect3.getText());
    if (content3.equals ("elden ring")){
        Toast.makeText(this, "You're mentally unstable", Toast.LENGTH_LONG).show();
    }
    else if (content3.equals ("lol")){
        Toast.makeText(this, "You've never touched a woman", Toast.LENGTH_LONG).show();
    }
    else if (content3.equals ("minecraft")){
        Toast.makeText(this, "You're badass", Toast.LENGTH_LONG).show();
    }
    else if (content3.equals ("cs")){
        Toast.makeText(this, "You're missing the old fallen", Toast.LENGTH_LONG).show();
    }
    else if (content3.equals ("valorant")){
        Toast.makeText(this, "fuck you!", Toast.LENGTH_LONG).show();
    }
    else{
        Toast.makeText(this, "Choose a valid game.", Toast.LENGTH_LONG).show();
    }


    }

    public void callWindow4 (View view) {
        Intent intent = new Intent(this, Case4.class);
        startActivity(intent);
    }

    public void returnCase2 (View view) {

        finish();
    }









}