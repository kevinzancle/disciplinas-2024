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

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
    }

    public void case1oc(View view){
        EditText inputcollect = findViewById(R.id.editTextInput1);
        String content = String.valueOf(inputcollect.getText());
        if (content.equals ("charmander")) {
            Toast.makeText(this, "You are right, little trainer!", Toast.LENGTH_LONG).show();
        }
    }

    public void callWindow2 (View view) {
        Intent intent = new Intent(this, Case2.class);
        startActivity(intent);
    }






}