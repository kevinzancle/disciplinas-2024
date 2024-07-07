package com.example.somanumerosparesimpares;

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
    public void executarPar (View view) {

        EditText numero = findViewById(R.id.editTextIn);
        String numeroString = numero.getText().toString();
        int numeroInt = Integer.parseInt(numeroString);
        int armazenador = 0;
        int i;
        for (i = 0; i <= numeroInt; i +=2) {
            armazenador += i;
        }
        Toast.makeText(this, String.valueOf(armazenador), Toast.LENGTH_LONG).show();
    }
    public void executarImpar (View view) {

        EditText numero = findViewById(R.id.editTextIn);
        String numeroString = numero.getText().toString();
        int numeroInt = Integer.parseInt(numeroString);
        int armazenador = 0;
        int i;
        for (i = 1; i <= numeroInt;i +=2 ) {
            armazenador += i;
        }

        Toast.makeText(this, String.valueOf(armazenador), Toast.LENGTH_LONG).show();
    }
}