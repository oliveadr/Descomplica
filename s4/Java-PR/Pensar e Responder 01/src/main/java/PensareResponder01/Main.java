package PensareResponder01;
import javax.swing.JOptionPane;

public class Main {

    public static void main(String[] args) {
        // declaração das variaveis e do vetor

        int VetSoma [], i , soma = 0;
        int media=0;
        VetSoma = new int[5];
        for(i=0;i<=4; i++){
           VetSoma[i] = Integer.parseInt(JOptionPane.showInputDialog ("Digite um valor inteiro"));
            
            soma = soma + VetSoma[i];
        }
        // definindo a media 
        media = soma /5;
        //saída dos dados solicitados
        System.out.print("A media dos valores digitados: " + media);

    }
    
}
