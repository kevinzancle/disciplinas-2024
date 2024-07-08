package com.example.jogodeadivinhacao;

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
    private int numeroAdivinhar;

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
        numeroAdivinhar = (int) (Math.random() * 100) + 1;
    }

    public void adivinhar(View view) {
        EditText entrada = findViewById(R.id.editTextIn);
        String entradaString = entrada.getText().toString();
        int entradaInt = Integer.parseInt(entradaString);


            if (entradaInt == numeroAdivinhar) {
                Toast.makeText(this, "Parabéns, você acertou!", Toast.LENGTH_SHORT).show();
                numeroAdivinhar = (int) (Math.random() * 10) + 1;
            } else{
                if (entradaInt < numeroAdivinhar) {
                    Toast.makeText(this, "O palpite está baixo!", Toast.LENGTH_SHORT).show();

                } else if(entradaInt > numeroAdivinhar) {
                    Toast.makeText(this, "O palpite está alto!", Toast.LENGTH_SHORT).show();

                }
            }


    }

}