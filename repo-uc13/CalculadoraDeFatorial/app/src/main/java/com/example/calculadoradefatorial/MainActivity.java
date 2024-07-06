package com.example.calculadoradefatorial;

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

import java.util.Scanner;

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
    public void executar (View view){
        TextView textViewOut = findViewById(R.id.textViewOut);
        EditText input = findViewById(R.id.input);
        String inputString = input.getText().toString();
        int inputInt = Integer.parseInt(inputString);
        int dado = inputInt;
        int fator = 1;
        for(int i = dado; i>=1;i--){
            fator *=i;
        }
        textViewOut.setText("O fatorial de "+dado+" é: "+fator);

    }
}