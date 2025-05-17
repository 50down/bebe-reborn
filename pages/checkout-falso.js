import React from "react";
import { Button } from "@/components/ui/button";

export default function CheckoutFalso() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="max-w-lg w-full text-center border border-gray-300 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">💳 Finalize sua Adoção</h1>
        <p className="text-gray-700 mb-6">
          Escolha uma das opções de pagamento abaixo para confirmar sua adoção e receber
          todos os materiais exclusivos em seu e-mail!
        </p>

        <div className="bg-pink-50 p-4 rounded mb-4 text-left">
          <p className="font-semibold">🔖 Pix:</p>
          <p>Chave: contato@bebe-reborn.vip</p>
          <p>Nome: Projeto Reborn Brasil</p>
        </div>

        <div className="bg-pink-50 p-4 rounded mb-4 text-left">
          <p className="font-semibold">🏦 Boleto:</p>
          <p>Gerado automaticamente após clicar no botão abaixo.</p>
        </div>

        <div className="bg-pink-50 p-4 rounded mb-6 text-left">
          <p className="font-semibold">💳 Cartão de Crédito:</p>
          <p>Processado com segurança pela nossa plataforma.</p>
        </div>

        <Button className="bg-pink-600 text-white w-full text-lg py-2">
          Gerar Pagamento Seguro
        </Button>

        <p className="text-sm text-gray-500 mt-4 italic">
          Após o pagamento, seu acesso será enviado automaticamente.
        </p>
      </div>
    </div>
  );
}
