export interface University {
    id_censo_ies: number;
    no_regiao_ies: string;
    co_regiao_ies: number;
    no_uf_ies: string;
    sg_uf_ies: string;
    co_uf_ies: number;
    no_municipio_ies: string;
    co_municipio_ies: number;
    tp_organizacao_academica: number;
    tp_categoria_administrativa: number;
    co_ies: number;
    no_ies: string;
    sg_ies: string;
    qt_docente_total: number;
    qt_docente_exe: number;
    doc_ex_femi: number;
    doc_ex_masc: number;
    doc_ex_sem_grad: number;
    doc_ex_grad: number;
    doc_ex_esp: number;
    doc_ex_mest: number;
    doc_ex_dout: number;
    in_acesso_portal_capes: number;
    in_acesso_outras_bases: number;
    in_assina_outra_base: number;
    in_repositorio_institucional: number;
    in_busca_integrada: number;
    in_servico_internet: number;
    in_participa_rede_social: number;
    in_catalogo_online: number;
}