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

public class Case2 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_caso2);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
    }

    public void case2oc (View view){
        EditText inputcollect2 = findViewById(R.id.editTextInput2);
        String content2 = String.valueOf(inputcollect2.getText());
        if (content2.equals("meat")){
            Toast.makeText(this, "+100 Gold, Sr. Pirate!", Toast.LENGTH_LONG).show();
        } else {
            Toast.makeText(this, "Try again!", Toast.LENGTH_LONG).show();
        }
    }

    public void callWindow3 (View view) {
        Intent intent = new Intent(this, Case3.class);
        startActivity(intent);
    }

    public void returnCase1 (View view) {
        finish();
    }

}