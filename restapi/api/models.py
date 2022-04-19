# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class CensoCurso(models.Model):
    id_censo_curso = models.AutoField(db_column='ID_CENSO_CURSO', primary_key=True, blank=True)  # Field name made lowercase.
    co_ies = models.BigIntegerField(db_column='CO_IES', blank=True)  # Field name made lowercase.
    no_cine_rotulo = models.CharField(db_column='NO_CINE_ROTULO', max_length=255, blank=True)  # Field name made lowercase.
    co_cine_rotulo = models.CharField(db_column='CO_CINE_ROTULO', max_length=255, blank=True)  # Field name made lowercase.
    co_cine_area_geral = models.CharField(db_column='CO_CINE_AREA_GERAL', max_length=255, blank=True)  # Field name made lowercase.
    no_cine_area_geral = models.CharField(db_column='NO_CINE_AREA_GERAL', max_length=255, blank=True)  # Field name made lowercase.
    co_cine_area_especifica = models.CharField(db_column='CO_CINE_AREA_ESPECIFICA', max_length=255, blank=True)  # Field name made lowercase.
    no_cine_area_especifica = models.CharField(db_column='NO_CINE_AREA_ESPECIFICA', max_length=255, blank=True)  # Field name made lowercase.
    co_cine_area_detalhada = models.CharField(db_column='CO_CINE_AREA_DETALHADA', max_length=255, blank=True)  # Field name made lowercase.
    no_cine_area_detalhada = models.CharField(db_column='NO_CINE_AREA_DETALHADA', max_length=255, blank=True)  # Field name made lowercase.
    tp_grau_academico = models.IntegerField(db_column='TP_GRAU_ACADEMICO', blank=True)  # Field name made lowercase.
    tp_modalidade_ensino = models.IntegerField(db_column='TP_MODALIDADE_ENSINO', blank=True)  # Field name made lowercase.
    qt_vaga_total = models.BigIntegerField(db_column='QT_VAGA_TOTAL', blank=True)  # Field name made lowercase.
    qt_vaga_total_diurno = models.BigIntegerField(db_column='QT_VAGA_TOTAL_DIURNO', blank=True)  # Field name made lowercase.
    qt_vaga_total_noturno = models.BigIntegerField(db_column='QT_VAGA_TOTAL_NOTURNO', blank=True)  # Field name made lowercase.
    qt_vaga_total_ead = models.BigIntegerField(db_column='QT_VAGA_TOTAL_EAD', blank=True)  # Field name made lowercase.
    qt_mat = models.BigIntegerField(db_column='QT_MAT', blank=True)  # Field name made lowercase.
    qt_conc = models.BigIntegerField(db_column='QT_CONC', blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'CENSO_CURSO'


class CensoIes(models.Model):
    id_censo_ies = models.AutoField(db_column='ID_CENSO_IES', primary_key=True, blank=True)  # Field name made lowercase.
    no_regiao_ies = models.CharField(db_column='NO_REGIAO_IES', max_length=255, blank=True)  # Field name made lowercase.
    co_regiao_ies = models.IntegerField(db_column='CO_REGIAO_IES', blank=True)  # Field name made lowercase.
    no_uf_ies = models.CharField(db_column='NO_UF_IES', max_length=255, blank=True)  # Field name made lowercase.
    sg_uf_ies = models.CharField(db_column='SG_UF_IES', max_length=255, blank=True)  # Field name made lowercase.
    co_uf_ies = models.IntegerField(db_column='CO_UF_IES', blank=True)  # Field name made lowercase.
    no_municipio_ies = models.CharField(db_column='NO_MUNICIPIO_IES', max_length=255, blank=True)  # Field name made lowercase.
    co_municipio_ies = models.BigIntegerField(db_column='CO_MUNICIPIO_IES', blank=True)  # Field name made lowercase.
    tp_organizacao_academica = models.IntegerField(db_column='TP_ORGANIZACAO_ACADEMICA', blank=True)  # Field name made lowercase.
    tp_categoria_administrativa = models.IntegerField(db_column='TP_CATEGORIA_ADMINISTRATIVA', blank=True)  # Field name made lowercase.
    co_ies = models.BigIntegerField(db_column='CO_IES', blank=True)  # Field name made lowercase.
    no_ies = models.CharField(db_column='NO_IES', max_length=255, blank=True)  # Field name made lowercase.
    sg_ies = models.CharField(db_column='SG_IES', max_length=255, blank=True)  # Field name made lowercase.
    qt_docente_total = models.IntegerField(db_column='QT_DOCENTE_TOTAL', blank=True)  # Field name made lowercase.
    qt_docente_exe = models.IntegerField(db_column='QT_DOCENTE_EXE', blank=True)  # Field name made lowercase.
    doc_ex_femi = models.IntegerField(db_column='DOC_EX_FEMI', blank=True)  # Field name made lowercase.
    doc_ex_masc = models.IntegerField(db_column='DOC_EX_MASC', blank=True)  # Field name made lowercase.
    doc_ex_sem_grad = models.IntegerField(db_column='DOC_EX_SEM_GRAD', blank=True)  # Field name made lowercase.
    doc_ex_grad = models.IntegerField(db_column='DOC_EX_GRAD', blank=True)  # Field name made lowercase.
    doc_ex_esp = models.IntegerField(db_column='DOC_EX_ESP', blank=True)  # Field name made lowercase.
    doc_ex_mest = models.IntegerField(db_column='DOC_EX_MEST', blank=True)  # Field name made lowercase.
    doc_ex_dout = models.IntegerField(db_column='DOC_EX_DOUT', blank=True)  # Field name made lowercase.
    in_acesso_portal_capes = models.IntegerField(db_column='IN_ACESSO_PORTAL_CAPES', blank=True)  # Field name made lowercase.
    in_acesso_outras_bases = models.IntegerField(db_column='IN_ACESSO_OUTRAS_BASES', blank=True)  # Field name made lowercase.
    in_assina_outra_base = models.IntegerField(db_column='IN_ASSINA_OUTRA_BASE', blank=True)  # Field name made lowercase.
    in_repositorio_institucional = models.IntegerField(db_column='IN_REPOSITORIO_INSTITUCIONAL', blank=True)  # Field name made lowercase.
    in_busca_integrada = models.IntegerField(db_column='IN_BUSCA_INTEGRADA', blank=True)  # Field name made lowercase.
    in_servico_internet = models.IntegerField(db_column='IN_SERVICO_INTERNET', blank=True)  # Field name made lowercase.
    in_participa_rede_social = models.IntegerField(db_column='IN_PARTICIPA_REDE_SOCIAL', blank=True)  # Field name made lowercase.
    in_catalogo_online = models.IntegerField(db_column='IN_CATALOGO_ONLINE', blank=True)  # Field name made lowercase.

    class Meta:
        db_table = 'CENSO_IES'


class Cpc(models.Model):
    id_cpc = models.AutoField(db_column='ID_CPC', primary_key=True, blank=True)  # Field name made lowercase.
    codigo_ies = models.BigIntegerField(db_column='CODIGO_IES', blank=True)  # Field name made lowercase.
    codigo_curso = models.BigIntegerField(db_column='CODIGO_CURSO', blank=True)  # Field name made lowercase.
    cpc_continuo = models.TextField(db_column='CPC_CONTINUO', blank=True)  # Field name made lowercase. This field type is a guess.
    cpc_faixa = models.IntegerField(db_column='CPC_FAIXA', blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'CPC'


class Enade(models.Model):
    id_enade = models.AutoField(db_column='ID_ENADE', primary_key=True, blank=True)  # Field name made lowercase.
    codigo_ies = models.BigIntegerField(db_column='CODIGO_IES', blank=True)  # Field name made lowercase.
    nome_ies = models.CharField(db_column='NOME_IES', max_length=255, blank=True)  # Field name made lowercase.
    codigo_curso = models.BigIntegerField(db_column='CODIGO_CURSO', blank=True)  # Field name made lowercase.
    modalidade_ensino = models.CharField(db_column='MODALIDADE_ENSINO', max_length=255, blank=True)  # Field name made lowercase.
    conceito_enade_continuo = models.TextField(db_column='CONCEITO_ENADE_CONTINUO', blank=True)  # Field name made lowercase. This field type is a guess.
    conceito_enade_faixa = models.CharField(db_column='CONCEITO_ENADE_FAIXA', max_length=255, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'ENADE'


class Igc(models.Model):
    id_igc = models.AutoField(db_column='ID_IGC', primary_key=True, blank=True)  # Field name made lowercase.
    codigo_ies = models.BigIntegerField(db_column='CODIGO_IES', blank=True)  # Field name made lowercase.
    sigla_ies = models.CharField(db_column='SIGLA_IES', max_length=255, blank=True)  # Field name made lowercase.
    igc_continuo = models.TextField(db_column='IGC_CONTINUO', blank=True)  # Field name made lowercase. This field type is a guess.
    igc_faixa = models.CharField(db_column='IGC_FAIXA', max_length=255, blank=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'IGC'


class ApiCpcmodel(models.Model):
    id_cpc = models.AutoField(db_column='ID_CPC', primary_key=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'api_cpcmodel'


class ApiCursomodel(models.Model):
    id_censo_curso = models.AutoField(db_column='ID_CENSO_CURSO', primary_key=True)  # Field name made lowercase.
    no_cine_rotulo = models.CharField(db_column='NO_CINE_ROTULO', max_length=100)  # Field name made lowercase.
    co_cine_rotulo = models.CharField(db_column='CO_CINE_ROTULO', max_length=100)  # Field name made lowercase.
    co_cine_area_geral = models.CharField(db_column='CO_CINE_AREA_GERAL', max_length=100)  # Field name made lowercase.
    no_cine_area_geral = models.CharField(db_column='NO_CINE_AREA_GERAL', max_length=100)  # Field name made lowercase.
    co_cine_area_especifica = models.CharField(db_column='CO_CINE_AREA_ESPECIFICA', max_length=100)  # Field name made lowercase.
    no_cine_area_especifica = models.CharField(db_column='NO_CINE_AREA_ESPECIFICA', max_length=100)  # Field name made lowercase.
    co_cine_area_detalhada = models.CharField(db_column='CO_CINE_AREA_DETALHADA', max_length=100)  # Field name made lowercase.
    no_cine_area_detalhada = models.CharField(db_column='NO_CINE_AREA_DETALHADA', max_length=100)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'api_cursomodel'


class ApiEnademodel(models.Model):
    id_enade = models.AutoField(db_column='ID_ENADE', primary_key=True)  # Field name made lowercase.
    nome_ies = models.CharField(db_column='NOME_IES', max_length=100)  # Field name made lowercase.
    modalidade_ensino = models.CharField(db_column='MODALIDADE_ENSINO', max_length=100)  # Field name made lowercase.
    conceito_enade_faixa = models.CharField(db_column='CONCEITO_ENADE_FAIXA', max_length=100)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'api_enademodel'


class ApiIesmodel(models.Model):
    id_censo_ies = models.AutoField(db_column='ID_CENSO_IES', primary_key=True)  # Field name made lowercase.
    no_regiao_ies = models.CharField(db_column='NO_REGIAO_IES', max_length=100)  # Field name made lowercase.
    no_uf_ies = models.CharField(db_column='NO_UF_IES', max_length=100)  # Field name made lowercase.
    sg_uf_ies = models.CharField(db_column='SG_UF_IES', max_length=100)  # Field name made lowercase.
    no_municipio_ies = models.CharField(db_column='NO_MUNICIPIO_IES', max_length=100)  # Field name made lowercase.
    no_ies = models.CharField(db_column='NO_IES', max_length=100)  # Field name made lowercase.
    sg_ies = models.CharField(db_column='SG_IES', max_length=100)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'api_iesmodel'


class ApiIgcmodel(models.Model):
    id_igc = models.AutoField(db_column='ID_IGC', primary_key=True)  # Field name made lowercase.
    sigla_ies = models.CharField(db_column='SIGLA_IES', max_length=100)  # Field name made lowercase.
    igc_faixa = models.CharField(db_column='IGC_FAIXA', max_length=100)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'api_igcmodel'