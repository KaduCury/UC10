export interface Evento{
    id?: number,
    nomeSolicitante: string,
    nomeEvento: string,
    descricao: string,
    data: string,
    preco: number | null,
    enderecoEvento: string,
    quantidadeIngresso: number | null,
    patrocinadorEvento: string
}