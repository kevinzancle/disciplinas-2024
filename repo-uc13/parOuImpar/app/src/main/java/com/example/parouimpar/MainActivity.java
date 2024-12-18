package com.example.parouimpar;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

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
    public void processar (View view){
        EditText numero = findViewById(R.id.inputNumber);
        TextView out = findViewById((R.id.textViewOut));
        String numeroStr = numero.getText().toString();
        float numeroFloat = Float.parseFloat(String.valueOf(numeroStr));
        float verificacao = numeroFloat%2;

        if (verificacao == 0){
            out.setText("O número digitado é par!");
        }else{
            out.setText("O número diigitado é Ímpar!");
        }
    }
}