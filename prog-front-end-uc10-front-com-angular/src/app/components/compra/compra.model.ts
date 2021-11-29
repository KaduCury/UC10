export interface Compra{
    id?: number
    nome: string
    sobrenome: string
    email: string
    telefone: string
    faixaEtaria: number | null
    endereco: string
    numeroCasa: number | null
    cep: string
    numeroCartao: string
    nomeTitular: string
    dataVenc: string
    anoVenc: string
    cvv: number | null
    numeroParcelas: number | null
}