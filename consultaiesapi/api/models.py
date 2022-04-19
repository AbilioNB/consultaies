from django.db import models
from uuid import uuid4

# Create your models here.
class cpcmodel(models.Model):
    ID_CPC = models.IntegerField(primary_key=True)
    CODIGO_IES = models.BigIntegerField
    CODIGO_CURSO = models.BigIntegerField
    CPC_CONTINUO =models.FloatField
    CPC_FAIXA = models.IntegerField
    class Meta:
        db_table = "CPC"

class igcmodel(models.Model):
    ID_IGC = models.IntegerField(primary_key=True)
    CODIGO_IES = models.BigIntegerField
    SIGLA_IES = models.CharField(max_length=100)
    IGC_CONTINUO = models.FloatField
    IGC_FAIXA = models.CharField(max_length=100)
    class Meta:
        db_table = "IGC"

class enademodel(models.Model):
    ID_ENADE = models.IntegerField(primary_key=True)
    CODIGO_IES = models.BigIntegerField
    NOME_IES = models.CharField(max_length=100)
    CODIGO_CURSO = models.BigIntegerField
    MODALIDADE_ENSINO = models.CharField(max_length=100)
    CONCEITO_ENADE_CONTINUO = models.FloatField
    CONCEITO_ENADE_FAIXA = models.CharField(max_length=100)

class cursomodel(models.Model):
    ID_CENSO_CURSO = models.IntegerField(primary_key=True)
    CO_IES = models.BigIntegerField
    NO_CINE_ROTULO = models.CharField(max_length=100)
    CO_CINE_ROTULO = models.CharField(max_length=100)
    CO_CINE_AREA_GERAL = models.CharField(max_length=100)
    NO_CINE_AREA_GERAL = models.CharField(max_length=100)
    CO_CINE_AREA_ESPECIFICA = models.CharField(max_length=100)
    NO_CINE_AREA_ESPECIFICA = models.CharField(max_length=100)
    CO_CINE_AREA_DETALHADA = models.CharField(max_length=100)
    NO_CINE_AREA_DETALHADA = models.CharField(max_length=100)
    TP_GRAU_ACADEMICO = models.IntegerField
    TP_MODALIDADE_ENSINO = models.IntegerField
    QT_VAGA_TOTAL = models.BigIntegerField
    QT_VAGA_TOTAL_DIURNO = models.BigIntegerField
    QT_VAGA_TOTAL_NOTURNO = models.BigIntegerField
    QT_VAGA_TOTAL_EAD = models.BigIntegerField
    QT_MAT = models.BigIntegerField
    QT_CONC = models.BigIntegerField

class iesmodel(models.Model):
    ID_CENSO_IES = models.IntegerField(primary_key=True)
    NO_REGIAO_IES = models.CharField(max_length=100)
    CO_REGIAO_IES = models.IntegerField
    NO_UF_IES = models.CharField(max_length=100)
    SG_UF_IES = models.CharField(max_length=100)
    CO_UF_IES = models.IntegerField
    NO_MUNICIPIO_IES = models.CharField(max_length=100)
    CO_MUNICIPIO_IES = models.BigIntegerField
    TP_ORGANIZACAO_ACADEMICA = models.IntegerField
    TP_CATEGORIA_ADMINISTRATIVA = models.IntegerField
    CO_IES = models.BigIntegerField
    NO_IES = models.CharField(max_length=100)
    SG_IES = models.CharField(max_length=100)
    QT_DOCENTE_TOTAL = models.IntegerField
    QT_DOCENTE_EXE = models.IntegerField
    DOC_EX_FEMI = models.IntegerField
    DOC_EX_MASC = models.IntegerField
    DOC_EX_SEM_GRAD = models.IntegerField
    DOC_EX_GRAD = models.IntegerField
    DOC_EX_ESP = models.IntegerField
    DOC_EX_MEST = models.IntegerField
    DOC_EX_DOUT = models.IntegerField
    IN_ACESSO_PORTAL_CAPES = models.IntegerField
    IN_ACESSO_OUTRAS_BASES = models.IntegerField
    IN_ASSINA_OUTRA_BASE = models.IntegerField
    IN_REPOSITORIO_INSTITUCIONAL = models.IntegerField
    IN_BUSCA_INTEGRADA = models.IntegerField
    IN_SERVICO_INTERNET = models.IntegerField
    IN_PARTICIPA_REDE_SOCIAL = models.IntegerField
    IN_CATALOGO_ONLINE = models.IntegerField