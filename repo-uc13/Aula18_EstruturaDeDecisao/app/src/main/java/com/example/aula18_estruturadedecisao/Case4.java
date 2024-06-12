package com.example.aula18_estruturadedecisao;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class Case4 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_case4);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
    }

    public void case4oc (View view){
        TextView change = findViewById(R.id.textViewChange);
        EditText inputcollect4 = findViewById(R.id.editTextInput4);
        String content4 = String.valueOf(inputcollect4.getText());
        switch (content4){
            case "kaio":
            change.setText("Kaio's dark magic is JAVA");
                break;
            case "andre":
                change.setText("Andre's dark magic is CALVICE");
                break;
            case "luiz":
                change.setText("Luiz's dark magic is HTML/CSS");
                break;
            case "uchida":
                change.setText("REAL HACKER MAN XINGLING!");
                break;

        }
    }

    public void lastbtn (View view){
        Toast.makeText(this, "If you move, you are gay...", Toast.LENGTH_LONG).show();
    }

    public void returnCase3 (View view) {

        finish();
    }


}