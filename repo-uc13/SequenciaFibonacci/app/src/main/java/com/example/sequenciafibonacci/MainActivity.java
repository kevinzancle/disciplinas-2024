package com.example.sequenciafibonacci;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import java.util.ArrayList;
import java.util.List;


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

    public void fibonacci (View view){
        List<Integer> listaArmazenadora = new ArrayList<>();
        TextView saida = findViewById(R.id.textViewOut);
        EditText sequencia = findViewById(R.id.editTextIn);
        String sequenciaString = sequencia.getText().toString();
        int sequenciaInt = Integer.parseInt(sequenciaString);

        int numero1 = 0;
        int numero2 = 1;

        for(int i = 0; i<=sequenciaInt;i++){
            listaArmazenadora.add(numero1);
            int numero3 = numero1+numero2;

            numero1 = numero2;
            numero2 = numero3;
        }
        saida.setText(listaArmazenadora.toString());
    }
}