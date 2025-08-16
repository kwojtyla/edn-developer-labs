"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Users, Cloud, Star, Download } from "lucide-react";
import { CodeBlock } from "@/components/code-block";
import { AttentionAlert } from "@/components/attention-alert";
import { AWSButton } from "@/components/aws-button";
import { LeftSidebar } from "@/components/left-sidebar";
import { RightSidebar } from "@/components/right-sidebar";
import { CheckpointButton } from "@/components/checkpoint-button";
import { useLanguage } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AWSLambdaLab() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-background">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Main Content - Add left and right margins to account for fixed sidebars */}
        <main className="flex-1 ml-80 mr-80 px-8 py-6 overflow-y-auto">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{t("lab.title")}</h1>

            {/* Lab Info Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="outline" className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                Lab
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                90 minutes
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Cloud className="h-3 w-3" />
                {t("lab.level.intermediate")}
              </Badge>
              <Badge variant="outline">AWS Lambda + API Gateway</Badge>
            </div>
          </div>

          <div className="space-y-8">
            <section id="summary">
              <Card>
                <CardHeader>
                  <CardTitle>{t("section.summary")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <AttentionAlert>
                    A interface do Console de Gerenciamento da AWS pode sofrer
                    pequenas alterações visuais ao longo do tempo, mas os
                    conceitos e a localização geral dos serviços Lambda e API
                    Gateway permanecem consistentes. As instruções neste resumo
                    seguem a estrutura geral das funcionalidades.
                  </AttentionAlert>

                  <p className="text-gray-700 dark:text-gray-300">
                    Este laboratório demonstra uma prática essencial para
                    gerenciar múltiplos ambientes (como desenvolvimento e
                    produção) de forma organizada e segura em aplicações
                    serverless, utilizando as funcionalidades de versionamento e
                    direcionamento do Lambda e API Gateway.
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Download />
                        Baixar arquivos do lab
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Arquivos do Lab</DialogTitle>
                        <Button
                          variant="ghost"
                          className="flex items-center justify-between w-full"
                        >
                          <span>lambda_function.py</span>

                          <Download />
                        </Button>
                        <Button
                          variant="ghost"
                          className="flex items-center justify-between w-full"
                        >
                          <span>labuser.ppk</span>

                          <Download />
                        </Button>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </section>

            {/* Objetivos */}
            <section id="objectives">
              <Card>
                <CardHeader>
                  <CardTitle>{t("section.objectives")}</CardTitle>
                  <CardDescription>
                    Este laboratório ensina como:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Criar uma função AWS Lambda compatível com a integração
                      Proxy do API Gateway.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Publicar diferentes versões da função Lambda para
                      representar estados distintos do código.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Criar Aliases no Lambda (ex: dev, prod) que funcionam como
                      ponteiros para versões específicas da função.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Criar uma API REST no API Gateway.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Configurar a integração do tipo Proxy entre a API Gateway
                      e a função Lambda.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Criar Stages no API Gateway (ex: Desenvolvimento,
                      Producao) para representar os diferentes ambientes de
                      implantação da API.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Integrar cada Stage da API Gateway com o Alias
                      correspondente da função Lambda, garantindo que cada
                      ambiente da API invoque a versão correta da função.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Testar os endpoints de cada Stage para verificar o correto
                      direcionamento das chamadas.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Compreender os benefícios do uso combinado de Aliases
                      (Lambda) e Stages (API Gateway) para o gerenciamento do
                      ciclo de vida e implantação controlada de aplicações
                      serverless.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Cenário */}
            <section id="scenario">
              <Card>
                <CardHeader>
                  <CardTitle>{t("section.scenario")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">
                    Você está desenvolvendo ou mantendo uma API serverless que
                    serve como backend para uma aplicação. É crucial poder
                    implantar e testar novas funcionalidades ou correções em um
                    ambiente isolado (desenvolvimento) antes de liberá-las para
                    os usuários finais (produção). Você precisa de um mecanismo
                    que permita ter endpoints de API estáveis para cada ambiente
                    (/dev/recurso e /prod/recurso, por exemplo), onde cada um
                    invoque a versão apropriada do código da sua função Lambda,
                    sem a necessidade de criar APIs ou funções separadas para
                    cada ambiente. Este laboratório implementa exatamente essa
                    solução usando Aliases do Lambda e Stages do API Gateway.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Pré-requisitos */}
            <section id="prerequisites">
              <Card>
                <CardHeader>
                  <CardTitle>{t("section.prerequisites")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center">
                      <Badge variant="outline" className="mr-2">
                        AWS
                      </Badge>
                      Conta AWS ativa.
                    </li>
                    <li className="flex items-center">
                      <Badge variant="outline" className="mr-2">
                        IAM
                      </Badge>
                      Permissões para criar e gerenciar funções Lambda e API
                      Gateway.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Parte 1: Criação da Função AWS Lambda */}
            <section id="step-1">
              <Card>
                <CardHeader>
                  <CardTitle>{t("section.part1")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">
                      1. Acessar Console Lambda
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Faça login no Console AWS e navegue até o serviço Lambda.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">
                      2. Criar Função Lambda
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      <li>
                        Clique em <AWSButton>Criar função</AWSButton>.
                      </li>
                      <li>
                        <strong>Criar do zero:</strong> Selecione essa opção.
                      </li>
                      <li>
                        <strong>Nome da função:</strong> Insira um nome
                        descritivo, ex: minha-funcao-proxy-lab-seunomesobrenome.
                      </li>
                      <li>
                        <strong>Runtime (Tempo de execução):</strong> Selecione
                        Python 3.9.
                      </li>
                      <li>
                        <strong>Arquitetura:</strong> x86_64.
                      </li>
                      <li>
                        <strong>Alterar a função de execução padrão:</strong>
                      </li>
                      <li>
                        <strong>de execução:</strong> Selecione "Criar uma nova
                        função com permissões básicas do Lambda".
                      </li>
                      <li>
                        Clique em <AWSButton>Criar função</AWSButton>.
                      </li>
                    </ul>
                  </div>

                  <Image
                    src={"/placeholder.svg"}
                    alt="Configuração do evento de teste"
                    width={500}
                    height={176}
                    className="w-full h-44 rounded border mt-4"
                  />

                  <div>
                    <h4 className="font-semibold mb-2">
                      Código da Função Lambda (versão desenvolvimento)
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      <li>
                        Na página da função Lambda recém-criada, role para baixo
                        até a seção <strong>Código (Origem do código)</strong>.
                      </li>
                      <li>
                        Substitua o código padrão no editor (lambda_function.py)
                        pelo:
                      </li>
                    </ul>

                    <div className="mt-4">
                      <CodeBlock
                        language="python"
                        title="Código Python - Ambiente de DESENVOLVIMENTO"
                        code={`import json

def lambda_handler(event, context):
    # Versão de DESENVOLVIMENTO
    stage = event.get('requestContext', {}).get('stage', 'unknown')
    
    response = {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'message': 'Hello from DEVELOPMENT environment!',
            'stage': stage,
            'version': 'dev-1.0',
            'environment': 'development'
        })
    }
    
    return response`}
                      />
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      3. Clique em <strong>Deploy</strong>.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">
                      Testar a Função Lambda (versão $LATEST)
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      <li>
                        Clique na aba <strong>Testar</strong> (ao lado da aba
                        Código).
                      </li>
                      <li>
                        Em <strong>Evento de teste</strong>, selecione{" "}
                        <strong>Criar novo evento</strong>.
                      </li>
                      <li>
                        <strong>Nome do evento:</strong> teste-simulado.
                      </li>
                      <li>
                        <strong>Modelo:</strong> Selecione{" "}
                        <strong>API Gateway AWS Proxy</strong>.
                      </li>
                      <li>
                        No JSON do evento, localize a chave{" "}
                        <code>requestContext</code> e dentro dela, a chave{" "}
                        <code>stage</code> (você a localizará na linha 100).
                      </li>
                      <li>Altere o valor para "test-stage":</li>
                    </ul>

                    <Image
                      src={"/placeholder.svg"}
                      alt="Configuração do evento de teste"
                      width={500}
                      height={176}
                      className="w-full h-44 rounded border mt-4"
                    />

                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      <li>
                        Clique em <strong>Salvar</strong> e depois em{" "}
                        <strong>Testar</strong>.
                      </li>
                      <li>
                        Verifique o resultado em{" "}
                        <strong>Resultado da execução → Detalhes</strong>.
                      </li>
                    </ul>

                    <Image
                      src={"/placeholder.svg"}
                      alt="Configuração do evento de teste"
                      width={500}
                      height={176}
                      className="w-full h-44 rounded border mt-4"
                    />
                  </div>
                  <CheckpointButton stepId="step-1" />
                </CardContent>
              </Card>
            </section>

            {/* Parte 2: Publicação de Versões e Criação de Aliases */}
            <section id="step-2">
              <Card>
                <CardHeader>
                  <CardTitle>{t("section.part2")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">
                      1. Publicar a Versão 1 da Função Lambda
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      <li>
                        Na página da sua função Lambda, vá para a aba{" "}
                        <strong>Versões</strong>.
                      </li>
                      <li>
                        Clique em <strong>Publicar nova versão</strong>.
                      </li>
                      <li>
                        <strong>Descrição da versão (opcional):</strong> Versão
                        inicial da função de desenvolvimento.
                      </li>
                      <li>
                        Clique em <strong>Publicação</strong> ou{" "}
                        <strong>Publicar</strong>.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Criar Alias "dev"</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      <li>
                        Volte para a sua Função lambda
                        "minha-funcao-proxy-lab-seunomesobrenome"
                      </li>
                      <li>
                        Vá para a aba <strong>Aliases</strong>.
                      </li>
                      <li>
                        Clique em <strong>Criar alias</strong>.
                      </li>
                      <li>
                        <strong>Nome do alias:</strong> dev.
                      </li>
                      <li>
                        <strong>Descrição do alias (opcional):</strong> Alias
                        para ambiente de desenvolvimento.
                      </li>
                      <li>
                        <strong>Versão:</strong> Selecione 1.
                      </li>
                      <li>
                        Clique em <strong>Salvar</strong>.
                      </li>
                      <li>
                        Copie o ARN e guarde-o no bloco de notas, você vai
                        precisar posteriormente.
                      </li>
                    </ul>

                    <Image
                      src={"/placeholder.svg"}
                      alt="Configuração do evento de teste"
                      width={500}
                      height={176}
                      className="w-full h-44 rounded border mt-4"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">
                      Modificar o Código da Função Lambda (para versão "prod")
                    </h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      <li>
                        Volte para a sua Função lambda
                        "minha-funcao-proxy-lab-seunomesobrenome"
                      </li>
                      <li>
                        Volte para a aba <strong>Código</strong>.
                      </li>
                      <li>
                        Substitua o código no editor (lambda_function.py) pelo:
                      </li>
                    </ol>

                    <div className="mt-4">
                      <CodeBlock
                        language="python"
                        title="Código Python - Ambiente de PRODUÇÃO"
                        code={`import json

def lambda_handler(event, context):
    # Versão de PRODUÇÃO
    stage = event.get('requestContext', {}).get('stage', 'unknown')
    
    response = {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'message': 'Hello from PRODUCTION environment!',
            'stage': stage,
            'version': 'prod-1.0',
            'environment': 'production',
            'status': 'stable'
        })
    }
    
    return response`}
                      />
                    </div>

                    <ol
                      className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4"
                      start={4}
                    >
                      <li>
                        Clique em <strong>Deploy</strong>.
                      </li>
                      <li>
                        Teste novamente a versão $LATEST (usando o mesmo evento
                        teste-simulado).
                      </li>
                      <li>
                        Clique na aba <strong>Testar</strong>.
                      </li>
                      <li>
                        Clique no botão <strong>Testar</strong>.
                      </li>
                      <li>
                        Verifique o resultado em{" "}
                        <strong>Resultado da execução → Detalhes</strong>.
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">
                      Publicar a Versão 2 da Função Lambda
                    </h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      <li>
                        Na aba <strong>Versões</strong>, clique em{" "}
                        <strong>Publicar nova versão</strong>.
                      </li>
                      <li>
                        <strong>Descrição da versão (opcional):</strong> Versão
                        para ambiente de produção.
                      </li>
                      <li>
                        Clique em <strong>Publicação</strong> ou{" "}
                        <strong>Publicar</strong>.
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Criar Alias "prod"</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      <li>
                        Volte para a sua Função lambda
                        "minha-funcao-proxy-lab-seunomesobrenome"
                      </li>
                      <li>
                        Na aba <strong>Aliases</strong>, clique em{" "}
                        <strong>Criar alias</strong>.
                      </li>
                      <li>
                        <strong>Nome do alias:</strong> prod.
                      </li>
                      <li>
                        <strong>Descrição do alias (opcional):</strong> Alias
                        para ambiente de produção.
                      </li>
                      <li>
                        <strong>Versão:</strong> Selecione 2.
                      </li>
                      <li>
                        Clique em <strong>Salvar</strong>.
                      </li>
                      <li>
                        Copie o ARN e guarde-o no bloco de notas, você vai
                        precisar posteriormente.
                      </li>
                    </ol>
                  </div>
                  <CheckpointButton stepId="step-2" />
                </CardContent>
              </Card>
            </section>

            {/* Parte 3: Criação e Configuração do API Gateway */}
            <section id="step-3">
              <Card>
                <CardHeader>
                  <CardTitle>{t("section.part3")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">
                      1. Acessar Console API Gateway
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      <li>Navegue até o serviço API Gateway.</li>
                      <li>
                        Clique em <strong>Criar uma API</strong>.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">
                      Escolher um tipo de API
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      <li>
                        Localize a caixa <strong>API REST</strong> e clique em{" "}
                        <strong>Compilar</strong>.
                      </li>
                    </ul>

                    <AttentionAlert>
                      Não é a opção API REST privada
                    </AttentionAlert>

                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      <li>
                        <strong>Criar nova API:</strong> Deixe "API nova"
                        selecionado.
                      </li>
                      <li>
                        <strong>Nome da API:</strong> Insira um nome, ex:
                        minha-api-proxy-lab-seunomesobrenome.
                      </li>
                      <li>
                        <strong>Descrição (opcional):</strong> API Gateway
                        (proxy) para lab de Lambda com Aliases.
                      </li>
                      <li>
                        <strong>Tipo de endpoint de API:</strong> "Regional".
                      </li>
                      <li>
                        Clique em <strong>Criar API</strong>.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">
                      Criar um Recurso (Path) na API
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      <li>
                        No painel esquerdo ("Recursos"), com a raiz /
                        selecionada, clique em <strong>Criar recurso</strong>.
                      </li>
                      <li>
                        <strong>Nome do recurso:</strong> hello.
                      </li>
                      <li>
                        Clique em <strong>Criar recurso</strong>.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">
                      Criar Método GET no Recurso /hello (com Proxy)
                    </h4>
                    <p className="text-sm font-medium text-blue-600 mb-2">
                      Para o ambiente de desenvolvimento:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      <li>
                        Selecione o recurso <strong>/hello</strong>{" "}
                        recém-criado.
                      </li>
                      <li>
                        Clique em <strong>Criar método</strong>.
                      </li>
                      <li>
                        <strong>Tipo de método:</strong> Selecione GET.
                      </li>
                      <li>
                        <strong>Tipo de integração:</strong> Selecione Função
                        Lambda.
                      </li>
                      <li>
                        <strong>Integração do proxy do Lambda:</strong>{" "}
                        Habilite.
                      </li>
                      <li>
                        <strong>Região da Lambda:</strong> Selecione a região
                        onde sua função Lambda foi criada (já deve esta
                        selecionada).
                      </li>
                      <li>
                        <strong>Função Lambda:</strong> Cole o ARN do Alias Dev.
                      </li>
                    </ul>

                    <AttentionAlert>
                      Esse é o meu exemplo. Você não deve colar esse ARN, Você
                      deverá colar o ARN do do seu alias "dev".
                      <br />
                      <code>
                        arn:aws:lambda:us-east-1:237482015336:function:minha-funcao-proxy-lab-seunomesobrenome:dev
                      </code>
                    </AttentionAlert>

                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      <li>
                        Clique em <strong>Criar método</strong>.
                      </li>
                    </ul>

                    <Image
                      src={"/placeholder.svg"}
                      alt="Configuração do evento de teste"
                      width={500}
                      height={176}
                      className="w-full h-44 rounded border mt-4"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">
                      Agora vamos implantar criando o Estágio para o ambiente de
                      Desenvolvimento
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      <li>
                        Clique em <strong>Implantar API</strong>
                      </li>
                      <li>
                        Em <strong>Estágio</strong>, selecione "Novo estágio"
                      </li>
                      <li>
                        <strong>Nome do estágio:</strong> Desenvolvimento.
                      </li>
                      <li>
                        <strong>Descrição da implantação:</strong> API/Lambda -
                        Versao Desenvovimento.
                      </li>
                      <li>
                        <strong>Implantar</strong>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">
                      Vamos implantar criando o Estágio para o ambiente de
                      Produção
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      <li>
                        Volte em <strong>Recursos</strong>
                      </li>
                      <li>
                        Selecione o método <strong>GET</strong>
                      </li>
                      <li>
                        Selecione <strong>Solicitação de integração</strong>.
                      </li>
                      <li>
                        <strong>Editar</strong>
                      </li>
                      <li>
                        Em <strong>Função Lambda</strong>, troque pelo ARN do
                        alias "prod". Cole o ARN do alias prod.
                      </li>
                      <li>Será algo parecido com:</li>
                    </ul>

                    <AttentionAlert>
                      Esse é o meu exemplo. Você não deve colar esse ARN, Você
                      deverá colar o ARN do do seu alias "prod".
                      <br />
                      <code>
                        arn:aws:lambda:us-east-1:237482015336:function:minha-funcao-proxy-lab-seunomesobrenome:prod
                      </code>
                    </AttentionAlert>

                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      <li>
                        <strong>Salve</strong>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">
                      Agora vamos implantar criando o Estágio para o ambiente de
                      Produção
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      <li>
                        Clique em <strong>Implantar API</strong>
                      </li>
                      <li>
                        Em <strong>Estágio</strong>, selecione "Novo estágio"
                      </li>
                      <li>
                        <strong>Nome do estágio:</strong> Producao.
                      </li>
                      <li>
                        <strong>Descrição da implantação:</strong> API/Lambda -
                        Producao.
                      </li>
                      <li>
                        <strong>Implantar</strong>
                      </li>
                    </ul>
                  </div>
                  <CheckpointButton stepId="step-3" />
                </CardContent>
              </Card>
            </section>

            {/* Parte 4: Testes */}
            <section id="step-4">
              <Card>
                <CardHeader>
                  <CardTitle>{t("section.part4")}</CardTitle>
                  <CardDescription>
                    Vamos testar se a ligação da sua função Lambda com o API
                    Gateway funcionou?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Volte em <strong>Estágios</strong>.
                    </li>
                    <li>
                      Clique no sinal de "+" (Desenvolvimento) para expandir,
                      novamente e novamente, até você ver o método GET.
                    </li>
                    <li>Selecione o GET, você verá a URL "Invocar URL"</li>
                    <li>Copie e cole no seu navegador.</li>
                    <li>
                      Se tudo deu certo, você verá um resultado parecido com as
                      imagens abaixo:
                    </li>
                  </ul>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Image
                      src={"/placeholder.svg"}
                      alt="Configuração do evento de teste"
                      width={500}
                      height={176}
                      className="w-full h-44 rounded border mt-4"
                    />
                    <Image
                      src={"/placeholder.svg"}
                      alt="Configuração do evento de teste"
                      width={500}
                      height={176}
                      className="w-full h-44 rounded border mt-4"
                    />
                  </div>

                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Repita o procedimento para testar a base de Produção.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Se tudo ocorreu bem, o resultado será igual as imagens
                      abaixo:
                    </p>

                    <Image
                      src={"/placeholder.svg"}
                      alt="Configuração do evento de teste"
                      width={500}
                      height={176}
                      className="w-full h-44 rounded border mt-4"
                    />
                  </div>
                  <CheckpointButton stepId="step-4" />
                </CardContent>
              </Card>
            </section>

            {/* Parte 6: Limpeza */}
            <section id="step-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t("section.part6")}</CardTitle>
                  <CardDescription>
                    Limpeza de Recursos (IMPORTANTE)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">
                      1. Excluir Stages API Gateway
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      No console API Gateway, selecione sua API, selecione a sua
                      API e clique em "Excluir".
                    </p>

                    <Image
                      src={"/placeholder.svg"}
                      alt="Configuração do evento de teste"
                      width={500}
                      height={176}
                      className="w-full h-44 rounded border mt-4"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">
                      2. Excluir Função Lambda
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                      <li>
                        No console do Lambda, selecione a função Lambda e clique
                        em "Ações" → "Excluir".
                      </li>
                      <li>Confirme a exclusão.</li>
                      <li>Feche.</li>
                    </ul>

                    <Image
                      src={"/placeholder.svg"}
                      alt="Configuração do evento de teste"
                      width={500}
                      height={176}
                      className="w-full h-44 rounded border mt-4"
                    />
                  </div>
                  <CheckpointButton stepId="step-6" />
                </CardContent>
              </Card>
            </section>

            {/* Footer */}
            <div className="text-center py-8 border-t">
              <p className="text-gray-600 dark:text-gray-400">
                Escola da Nuvem · Todos os direitos reservados.
              </p>
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </>
  );
}
