import * as React from 'react';
import { ScrollView, Text, Button } from 'react-native';
import { View } from 'react-native-web';
import { gStyle } from '../constants';
import { useState } from 'react';
import { CheckBox } from 'react-native-web';
import { useRoute } from '@react-navigation/native'

const Produtos = () => {
  const theme = 'light';
  // ABA PRODUTOS
  const route = useRoute();

  let {data} = route.params;
  console.log(data)

  const qtdConvidados = Number(data.qtdHomens) + Number(data.qtdMulheres) + Number(data.qtdCriancas)

  const [precoFinal, setPrecoFinal] = useState(0);
  const [rateio, setRateio] = useState(0);
  const [renderResultadoCalculo, setRenderResultadoCalculo] = useState(false);


  const gramasConsumoHomem = 600
  const gramasConsumoMulher = 400
  const gramasConsumoCrianca = 250

  const precoQuiloContraFile = 30.00
  const precoQuiloMaminha = 49.96
  const precoQuiloCupim = 34.96
  const precoQuiloCoxa = 11.48
  const precoQuiloCoracao = 25.46
  const precoQuiloAsa = 13.96
  const precoQuiloPicanha = 30.00
  const precoQuiloLinguica = 15.96
  const precoQuiloPaleta = 31.99
  const precoUnidadeAgua = 13.00
  const precoUnidadeRefrigerante = 7.00
  const precoUnidadeCerveja = 15.00
  const precoUnidadeSuco = 6.00
  const precoUnidadeArroz = 30.00
  const precoUnidadeFarofa = 9.00
  const precoUnidadePaodeAlho = 10.96
  const precoUnidadeQueijoCoalho = 23.96
  const precoUnidadePaoFrances = 0.50
  const precoUnidadeCarvao = 40.00
  const precoUnidadePrato = 1.20
  const precoUnidadeTalheres = 8.00
  const precoUnidadeGuardanapos = 5.00
  const precoUnidadeCopos = 6.00

  // Calculo Contra File
  let precoQuiloContraFilePorHomems = calculaPrecoQuiloCarnePorPessoa(gramasConsumoHomem, precoQuiloContraFile, data.qtdHomens)
  let precoQuiloContraFilePorMulheres = calculaPrecoQuiloCarnePorPessoa(gramasConsumoMulher, precoQuiloContraFile, data.qtdMulheres)
  let precoQuiloContraFilePorCriancas = calculaPrecoQuiloCarnePorPessoa(gramasConsumoCrianca, precoQuiloContraFile, data.qtdCriancas)
  let resultadoCalculoContraFile = precoQuiloContraFilePorHomems + precoQuiloContraFilePorMulheres + precoQuiloContraFilePorCriancas


  // Calculo  Maminha
  let precoQuiloMaminhaPorHomems = calculaPrecoQuiloCarnePorPessoa(gramasConsumoHomem, precoQuiloMaminha, data.qtdHomens)
  let precoQuiloMaminhaPorMulheres = calculaPrecoQuiloCarnePorPessoa(gramasConsumoMulher, precoQuiloMaminha, data.qtdMulheres)
  let precoQuiloMaminhaPorCriancas = calculaPrecoQuiloCarnePorPessoa(gramasConsumoCrianca, precoQuiloMaminha, data.qtdCriancas)
  let resultadoCalculoMaminha = precoQuiloMaminhaPorHomems + precoQuiloMaminhaPorMulheres + precoQuiloMaminhaPorCriancas

  // Calculo Cupim 
  let precoQuiloCupimPorHomems = calculaPrecoQuiloCarnePorPessoa(gramasConsumoHomem, precoQuiloCupim, data.qtdHomens)
  let precoQuiloCupimPorMulheres = calculaPrecoQuiloCarnePorPessoa(gramasConsumoMulher, precoQuiloCupim, data.qtdMulheres)
  let precoQuiloCupimPorCriancas = calculaPrecoQuiloCarnePorPessoa(gramasConsumoCrianca, precoQuiloCupim, data.qtdCriancas)
  let resultadoCalculoCupim = precoQuiloCupimPorHomems + precoQuiloCupimPorMulheres + precoQuiloCupimPorCriancas

  // Calculo Coxa
  let precoQuiloCoxaPorHomems = calculaPrecoQuiloCarnePorPessoa(gramasConsumoHomem, precoQuiloCoxa, data.qtdHomens)
  let precoQuiloCoxaPorMulheres = calculaPrecoQuiloCarnePorPessoa(gramasConsumoMulher, precoQuiloCoxa, data.qtdMulheres)
  let precoQuiloCoxaPorCriancas = calculaPrecoQuiloCarnePorPessoa(gramasConsumoCrianca, precoQuiloCoxa, data.qtdCriancas)
  let resultadoCalculoCoxa = precoQuiloCoxaPorHomems + precoQuiloCoxaPorMulheres + precoQuiloCoxaPorCriancas

  // Calculo Coração
  let precoQuiloCoracaoPorHomems = calculaPrecoQuiloCarnePorPessoa(gramasConsumoHomem, precoQuiloCoracao, data.qtdHomens)
  let precoQuiloCoracaoPorMulheres = calculaPrecoQuiloCarnePorPessoa(gramasConsumoMulher, precoQuiloCoracao, data.qtdMulheres)
  let precoQuiloCoracaoPorCriancas = calculaPrecoQuiloCarnePorPessoa(gramasConsumoCrianca, precoQuiloCoracao, data.qtdCriancas)
  let resultadoCalculoCoracao = precoQuiloCoracaoPorHomems + precoQuiloCoracaoPorMulheres + precoQuiloCoracaoPorCriancas

  // Calculo Asa
  let precoQuiloAsaPorHomems = calculaPrecoQuiloCarnePorPessoa(gramasConsumoHomem, precoQuiloAsa, data.qtdHomens)
  let precoQuiloAsaPorMulheres = calculaPrecoQuiloCarnePorPessoa(gramasConsumoMulher, precoQuiloAsa, data.qtdMulheres)
  let precoQuiloAsaPorCriancas = calculaPrecoQuiloCarnePorPessoa(gramasConsumoCrianca, precoQuiloAsa, data.qtdCriancas)
  let resultadoCalculoAsa = precoQuiloAsaPorHomems + precoQuiloAsaPorMulheres + precoQuiloAsaPorCriancas

  // Calculo picanha 
  let precoQuiloPicanhaPorHomems = calculaPrecoQuiloCarnePorPessoa(gramasConsumoHomem, precoQuiloPicanha, data.qtdHomens)
  let precoQuiloPicanhaPorMulheres = calculaPrecoQuiloCarnePorPessoa(gramasConsumoMulher, precoQuiloPicanha, data.qtdMulheres)
  let precoQuiloPicanhaPorCriancas = calculaPrecoQuiloCarnePorPessoa(gramasConsumoCrianca, precoQuiloPicanha, data.qtdCriancas)
  let resultadoCalculoPicanha = precoQuiloPicanhaPorHomems + precoQuiloPicanhaPorMulheres + precoQuiloPicanhaPorCriancas

  // Calculo Linguiça
  let precoQuiloLinguicaPorHomems = calculaPrecoQuiloCarnePorPessoa(gramasConsumoHomem, precoQuiloLinguica, data.qtdHomens)
  let precoQuiloLinguicaPorMulheres = calculaPrecoQuiloCarnePorPessoa(gramasConsumoMulher, precoQuiloLinguica, data.qtdMulheres)
  let precoQuiloLinguicaPorCriancas = calculaPrecoQuiloCarnePorPessoa(gramasConsumoCrianca, precoQuiloLinguica, data.qtdCriancas)
  let resultadoCalculoLinguica = precoQuiloLinguicaPorHomems + precoQuiloLinguicaPorMulheres + precoQuiloLinguicaPorCriancas

  // Calculo Paleta
  let precoQuiloPaletaPorHomems = calculaPrecoQuiloCarnePorPessoa(gramasConsumoHomem, precoQuiloPaleta, data.qtdHomens)
  let precoQuiloPaletaPorMulheres = calculaPrecoQuiloCarnePorPessoa(gramasConsumoMulher, precoQuiloPaleta, data.qtdMulheres)
  let precoQuiloPaletaPorCriancas = calculaPrecoQuiloCarnePorPessoa(gramasConsumoCrianca, precoQuiloPaleta, data.qtdCriancas)
  let resultadoCalculoPaleta = precoQuiloPaletaPorHomems + precoQuiloPaletaPorMulheres + precoQuiloPaletaPorCriancas

  // Calculo Agua
  let precoUnidadeAguaPorHomems = calcularPrecoUnidadePorPessoa(gramasConsumoHomem, precoUnidadeAgua, data.qtdHomens)
  let precoUnidadeAguaPorMulheres = calcularPrecoUnidadePorPessoa(gramasConsumoMulher, precoUnidadeAgua, data.qtdMulheres)
  let precoUnidadeAguaPorCriancas = calcularPrecoUnidadePorPessoa(gramasConsumoCrianca, precoUnidadeAgua, data.qtdCriancas)
  let resultadoCalculoAgua = precoUnidadeAguaPorHomems + precoUnidadeAguaPorMulheres + precoUnidadeAguaPorCriancas

  // Calculo Refrigerante
  let precoUnidadeRefrigerantePorHomems = calcularPrecoUnidadePorPessoa(gramasConsumoHomem, precoUnidadeRefrigerante, data.qtdHomens)
  let precoUnidadeRefrigerantePorMulheres = calcularPrecoUnidadePorPessoa(gramasConsumoMulher, precoUnidadeRefrigerante, data.qtdMulheres)
  let precoUnidadeRefrigerantePorCriancas = calcularPrecoUnidadePorPessoa(gramasConsumoCrianca, precoUnidadeRefrigerante, data.qtdCriancas)
  let resultadoCalculoRefrigerante = precoUnidadeRefrigerantePorHomems + precoUnidadeRefrigerantePorMulheres + precoUnidadeRefrigerantePorCriancas

  // Calculo Cerveja
  let precoUnidadeCervejaPorHomems = calcularPrecoUnidadePorPessoa(gramasConsumoHomem, precoUnidadeCerveja, data.qtdHomens)
  let precoUnidadeCervejaPorMulheres = calcularPrecoUnidadePorPessoa(gramasConsumoMulher, precoUnidadeCerveja, data.qtdMulheres)
  let resultadoCalculoCerveja = precoUnidadeCervejaPorHomems + precoUnidadeCervejaPorMulheres

  // Calculo Suco
  let precoUnidadeSucoPorHomems = calcularPrecoUnidadePorPessoa(gramasConsumoHomem, precoUnidadeSuco, data.qtdHomens)
  let precoUnidadeSucoPorMulheres = calcularPrecoUnidadePorPessoa(gramasConsumoMulher, precoUnidadeSuco, data.qtdMulheres)
  let precoUnidadeSucoPorCriancas = calcularPrecoUnidadePorPessoa(gramasConsumoCrianca, precoUnidadeSuco, data.qtdCriancas)
  let resultadoCalculoSuco = precoUnidadeSucoPorHomems + precoUnidadeSucoPorMulheres + precoUnidadeSucoPorCriancas

  // Calculo Arroz
  let precoUnidadeArrozPorHomems = calcularPrecoUnidadePorPessoa(gramasConsumoHomem, precoUnidadeArroz, data.qtdHomens)
  let precoUnidadeArrozPorMulheres = calcularPrecoUnidadePorPessoa(gramasConsumoMulher, precoUnidadeArroz, data.qtdMulheres)
  let precoUnidadeArrozPorCriancas = calcularPrecoUnidadePorPessoa(gramasConsumoCrianca, precoUnidadeArroz, data.qtdCriancas)
  let resultadoCalculoArroz = precoUnidadeArrozPorHomems + precoUnidadeArrozPorMulheres + precoUnidadeArrozPorCriancas

  // Calculo Farofa
  let precoUnidadeFarofaPorHomems = calcularPrecoUnidadePorPessoa(gramasConsumoHomem, precoUnidadeFarofa, data.qtdHomens)
  let precoUnidadeFarofaPorMulheres = calcularPrecoUnidadePorPessoa(gramasConsumoMulher, precoUnidadeFarofa, data.qtdMulheres)
  let precoUnidadeFarofaPorCriancas = calcularPrecoUnidadePorPessoa(gramasConsumoCrianca, precoUnidadeFarofa, data.qtdCriancas)
  let resultadoCalculoFarofa = precoUnidadeFarofaPorHomems + precoUnidadeFarofaPorMulheres + precoUnidadeFarofaPorCriancas

  // Calculo PaoDeAlho
  let precoUnidadePaodeAlhoPorHomems = calcularPrecoUnidadePorPessoa(gramasConsumoHomem, precoUnidadePaodeAlho, data.qtdHomens)
  let precoUnidadePaodeAlhoPorMulheres = calcularPrecoUnidadePorPessoa(gramasConsumoMulher, precoUnidadePaodeAlho, data.qtdMulheres)
  let precoUnidadePaodeAlhoPorCriancas = calcularPrecoUnidadePorPessoa(gramasConsumoCrianca, precoUnidadePaodeAlho, data.qtdCriancas)
  let resultadoCalculoPaodeAlho = precoUnidadePaodeAlhoPorHomems + precoUnidadePaodeAlhoPorMulheres + precoUnidadePaodeAlhoPorCriancas

  // Calculo QueijoCoalho 
  let precoUnidadeQueijoCoalhoPorHomems = calcularPrecoUnidadePorPessoa(gramasConsumoHomem, precoUnidadeQueijoCoalho, data.qtdHomens)
  let precoUnidadeQueijoCoalhoPorMulheres = calcularPrecoUnidadePorPessoa(gramasConsumoMulher, precoUnidadeQueijoCoalho, data.qtdMulheres)
  let precoUnidadeQueijoCoalhoPorCriancas = calcularPrecoUnidadePorPessoa(gramasConsumoCrianca, precoUnidadeQueijoCoalho, data.qtdCriancas)
  let resultadoCalculoQueijoCoalho = precoUnidadeQueijoCoalhoPorHomems + precoUnidadeQueijoCoalhoPorMulheres + precoUnidadeQueijoCoalhoPorCriancas

  // Calculo PaoFrances
  let precoUnidadePaoFrancesPorHomems = calcularPrecoUnidadePorPessoa(gramasConsumoHomem, precoUnidadePaoFrances, data.qtdHomens)
  let precoUnidadePaoFrancesPorMulheres = calcularPrecoUnidadePorPessoa(gramasConsumoMulher, precoUnidadePaoFrances, data.qtdMulheres)
  let precoUnidadePaoFrancesPorCriancas = calcularPrecoUnidadePorPessoa(gramasConsumoCrianca, precoUnidadePaoFrances, data.qtdCriancas)
  let resultadoCalculoPaoFrances = precoUnidadePaoFrancesPorHomems + precoUnidadePaoFrancesPorMulheres + precoUnidadePaoFrancesPorCriancas

  // Calculo Carvao
  let precoUnidadeCarvaoPorHomems = calcularPrecoUnidadePorPessoa(gramasConsumoHomem, precoUnidadeCarvao, data.qtdHomens)
  let precoUnidadeCarvaoPorMulheres = calcularPrecoUnidadePorPessoa(gramasConsumoMulher, precoUnidadeCarvao, data.qtdMulheres)
  let precoUnidadeCarvaoPorCriancas = calcularPrecoUnidadePorPessoa(gramasConsumoCrianca, precoUnidadeCarvao, data.qtdCriancas)
  let resultadoCalculoCarvao = precoUnidadeCarvaoPorHomems + precoUnidadeCarvaoPorMulheres + precoUnidadeCarvaoPorCriancas

  // Calculo Prato
  let precoUnidadePratoPorHomems = calcularPrecoUnidadePorPessoa(gramasConsumoHomem, precoUnidadePrato, data.qtdHomens)
  let precoUnidadePratoPorMulheres = calcularPrecoUnidadePorPessoa(gramasConsumoMulher, precoUnidadePrato, data.qtdMulheres)
  let precoUnidadePratoPorCriancas = calcularPrecoUnidadePorPessoa(gramasConsumoCrianca, precoUnidadePrato, data.qtdCriancas)
  let resultadoCalculoPrato = precoUnidadePratoPorHomems + precoUnidadePratoPorMulheres + precoUnidadePratoPorCriancas

  // Calculo Talheres
  let precoUnidadeTalheresPorHomems = calcularPrecoUnidadePorPessoa(gramasConsumoHomem, precoUnidadeTalheres, data.qtdHomens)
  let precoUnidadeTalheresPorMulheres = calcularPrecoUnidadePorPessoa(gramasConsumoMulher, precoUnidadeTalheres, data.qtdMulheres)
  let precoUnidadeTalheresPorCriancas = calcularPrecoUnidadePorPessoa(gramasConsumoCrianca, precoUnidadeTalheres, data.qtdCriancas)
  let resultadoCalculoTalheres = precoUnidadeTalheresPorHomems + precoUnidadeTalheresPorMulheres + precoUnidadeTalheresPorCriancas

  // Calculo Guaradanapos
  let precoUnidadeGuardanaposPorHomems = calcularPrecoUnidadePorPessoa(gramasConsumoHomem, precoUnidadeGuardanapos, data.qtdHomens)
  let precoUnidadeGuardanaposPorMulheres = calcularPrecoUnidadePorPessoa(gramasConsumoMulher, precoUnidadeGuardanapos, data.qtdMulheres)
  let precoUnidadeGuardanaposPorCriancas = calcularPrecoUnidadePorPessoa(gramasConsumoCrianca, precoUnidadeGuardanapos, data.qtdCriancas)
  let resultadoCalculoGuardanapos = precoUnidadeGuardanaposPorHomems + precoUnidadeGuardanaposPorMulheres + precoUnidadeGuardanaposPorCriancas

  // Calculo Copos
  let precoUnidadeCoposPorHomems = calcularPrecoUnidadePorPessoa(gramasConsumoHomem, precoUnidadeCopos, data.qtdHomens)
  let precoUnidadeCoposPorMulheres = calcularPrecoUnidadePorPessoa(gramasConsumoMulher, precoUnidadeCopos, data.qtdMulheres)
  let precoUnidadeCoposPorCriancas = calcularPrecoUnidadePorPessoa(gramasConsumoCrianca, precoUnidadeCopos, data.qtdCriancas)
  let resultadoCalculoCopos = precoUnidadeCoposPorHomems + precoUnidadeCoposPorMulheres + precoUnidadeCoposPorCriancas

  function calcularResultadoFinal() {
    var precoFinal = Number(valorFinalContraFile) + Number(valorFinalMaminha) + Number(valorFinalCupim) + Number(valorFinalCoxa) + Number(valorFinalCoracao) + Number(valorFinalAsa) + Number(valorFinalPicanha) + Number(valorFinalLinguica) + Number(valorFinalPaleta) + Number(valorFinalAgua) + Number(valorFinalRefrigerante) + Number(valorFinalCerveja) + Number(valorFinalSuco) + Number(valorFinalArroz) + Number(valorFinalFarofa) + Number(valorFinalPaodeAlho) + Number(valorFinalQueijoCoalho) + Number(valorFinalPaoFrances) + Number(valorFinalCarvao) + Number(valorFinalPrato) + Number(valorFinalTalheres) + Number(valorFinalGuardanapos) + Number(valorFinalCopos)
    var rateio = Number(precoFinal) / Number(qtdConvidados);
    setPrecoFinal(Number(precoFinal).toFixed(2));
    setRateio(Number(rateio).toFixed(2));
    setRenderResultadoCalculo(true)
    // setResultadoFinal();
  }

  // criar um novo useState pra cada carne
  const [valorFinalContraFile, setValorFinalContraFile] = useState(0);
  const [valorFinalMaminha, setValorFinalMaminha] = useState(0);
  const [valorFinalCupim, setValorFinalCupim] = useState(0);
  const [valorFinalCoxa, setValorFinalCoxa] = useState(0);
  const [valorFinalCoracao, setValorFinalCoracao] = useState(0);
  const [valorFinalAsa, setValorFinalAsa] = useState(0);
  const [valorFinalPicanha, setValorFinalPicanha] = useState(0);
  const [valorFinalLinguica, setValorFinalLinguica] = useState(0);
  const [valorFinalPaleta, setValorFinalPaleta] = useState(0);

  //criar um selected nova function pra cada carne
  function selectedContraFile() {
    if (isSelectedContraFile) {
      setContraFile(false)
      setValorFinalContraFile(0)
    }
    else {
      setContraFile(true)
      setValorFinalContraFile(resultadoCalculoContraFile)
    }
  }

  function selectedMaminha() {
    if (isSelectedMaminha) {
      setMaminha(false)
      setValorFinalMaminha(0)
    } else {
      setMaminha(true)
      setValorFinalMaminha(resultadoCalculoMaminha)
    }
  }

  function selectedCupim() {
    if (isSelectedCupim) {
      setCupim(false)
      setValorFinalCupim(0)
    }
    else {
      setCupim(true)
      setValorFinalCupim(resultadoCalculoCupim)
    }
  }


  function selectedCoxa() {
    if (isSelectedCoxa) {
      setCoxa(false)
      setValorFinalCoxa(0)
    }
    else {
      setCoxa(true)
      setValorFinalCoxa(resultadoCalculoCoxa)
    }
  }


  function selectedCoracao() {
    if (isSelectedCoracao) {
      setCoracao(false)
      setValorFinalCoracao(0)
    }
    else {
      setCoracao(true)
      setValorFinalCoracao(resultadoCalculoCoracao)
    }
  }

  function selectedAsa() {
    if (isSelectedAsa) {
      setAsa(false)
      setValorFinalAsa(0)
    }
    else {
      setAsa(true)
      setValorFinalAsa(resultadoCalculoAsa)
    }
  }

  function selectedPicanha() {
    if (isSelectedPicanha) {
      setPicanha(false)
      setValorFinalPicanha(0)
    }
    else {
      setPicanha(true)
      setValorFinalPicanha(resultadoCalculoPicanha)
    }
  }

  function selectedLinguica() {
    if (isSelectedLinguica) {
      setLinguica(false)
      setValorFinalLinguica(0)
    }
    else {
      setLinguica(true)
      setValorFinalLinguica(resultadoCalculoLinguica)
    }
  }


  function selectedPaleta() {
    if (isSelectedPaleta) {
      setPaleta(false)
      setValorFinalPaleta(0)
    }
    else {
      setPaleta(true)
      setValorFinalPaleta(resultadoCalculoPaleta)
    }
  }




  // criar um novo useState pra cada bebidas
  const [valorFinalAgua, setValorFinalAgua] = useState(0);
  const [valorFinalRefrigerante, setValorFinalRefrigerante] = useState(0);
  const [valorFinalCerveja, setValorFinalCerveja] = useState(0);
  const [valorFinalSuco, setValorFinalSuco] = useState(0);
  const [valorFinalArroz, setValorFinalArroz] = useState(0);
  const [valorFinalFarofa, setValorFinalFarofa] = useState(0);
  const [valorFinalPaodeAlho, setValorFinalPaodeAlho] = useState(0);
  const [valorFinalQueijoCoalho, setValorFinalQueijoCoalho] = useState(0);
  const [valorFinalPaoFrances, setValorFinalPaoFrances] = useState(0);
  const [valorFinalCarvao, setValorFinalCarvao] = useState(0);
  const [valorFinalPrato, setValorFinalPrato] = useState(0);
  const [valorFinalTalheres, setValorFinalTalheres] = useState(0);
  const [valorFinalGuardanapos, setValorFinalGuardanapos] = useState(0);
  const [valorFinalCopos, setValorFinalCopos] = useState(0);

  //criar um selected nova function pra cada bebidas
  function selectedAgua() {
    if (isSelectedAgua) {
      setAgua(false)
      setValorFinalAgua(0)
    }
    else {
      setAgua(true)
      setValorFinalAgua(resultadoCalculoAgua)
    }
  }

  function selectedRefrigerante() {
    if (isSelectedRefrigerante) {
      setRefrigerante(false)
      setValorFinalRefrigerante(0)
    }
    else {
      setRefrigerante(true)
      setValorFinalRefrigerante(resultadoCalculoRefrigerante)
    }
  }

  function selectedCerveja() {
    if (isSelectedCerveja) {
      setCerveja(false)
      setValorFinalCerveja(0)
    }
    else {
      setCerveja(true)
      setValorFinalCerveja(resultadoCalculoCerveja)
    }
  }

  function selectedSuco() {
    if (isSelectedSuco) {
      setSuco(false)
      setValorFinalSuco(0)
    }
    else {
      setSuco(true)
      setValorFinalSuco(resultadoCalculoSuco)
    }
  }

  function selectedArroz() {
    if (isSelectedArroz) {
      setArroz(false)
      setValorFinalArroz(0)
    }
    else {
      setArroz(true)
      setValorFinalArroz(resultadoCalculoArroz)
    }
  }

  function selectedFarofa() {
    if (isSelectedFarofa) {
      setFarofa(false)
      setValorFinalFarofa(0)
    }
    else {
      setFarofa(true)
      setValorFinalFarofa(resultadoCalculoFarofa)
    }
  }

  function selectedPaodeAlho() {
    if (isSelectedPaodeAlho) {
      setPaodeAlho(false)
      setValorFinalPaodeAlho(0)
    }
    else {
      setPaodeAlho(true)
      setValorFinalPaodeAlho(resultadoCalculoPaodeAlho)
    }
  }

  function selectedQueijoCoalho() {
    if (isSelectedQueijoCoalho) {
      setQueijoCoalho(false)
      setValorFinalQueijoCoalho(0)
    }
    else {
      setQueijoCoalho(true)
      setValorFinalQueijoCoalho(resultadoCalculoQueijoCoalho)
    }
  }

  function selectedPaoFrances() {
    if (isSelectedPaoFrances) {
      setPaoFrances(false)
      setValorFinalPaoFrances(0)
    }
    else {
      setPaoFrances(true)
      setValorFinalPaoFrances(resultadoCalculoPaoFrances)
    }
  }

  function selectedCarvao() {
    if (isSelectedCarvao) {
      setCarvao(false)
      setValorFinalCarvao(0)
    }
    else {
      setCarvao(true)
      setValorFinalCarvao(resultadoCalculoCarvao)
    }
  }

  function selectedPrato() {
    if (isSelectedPrato) {
      setPrato(false)
      setValorFinalPrato(0)
    }
    else {
      setPrato(true)
      setValorFinalPrato(resultadoCalculoPrato)
    }
  }

  function selectedTalheres() {
    if (isSelectedTalheres) {
      setTalheres(false)
      setValorFinalTalheres(0)
    }
    else {
      setTalheres(true)
      setValorFinalTalheres(resultadoCalculoTalheres)
    }
  }

  function selectedGuardanapos() {
    if (isSelectedGuardanapos) {
      setGuardanapos(false)
      setValorFinalGuardanapos(0)
    }
    else {
      setGuardanapos(true)
      setValorFinalGuardanapos(resultadoCalculoGuardanapos)
    }
  }

  function selectedCopos() {
    if (isSelectedCopos) {
      setCopos(false)
      setValorFinalCopos(0)
    }
    else {
      setCopos(true)
      setValorFinalCopos(resultadoCalculoCopos)
    }
  }

  const [isSelectedContraFile, setContraFile] = useState(false);
  const [isSelectedMaminha, setMaminha] = useState(false);
  const [isSelectedCupim, setCupim] = useState(false);
  const [isSelectedCoxa, setCoxa] = useState(false);
  const [isSelectedCoracao, setCoracao] = useState(false);
  const [isSelectedAsa, setAsa] = useState(false);
  const [isSelectedPicanha, setPicanha] = useState(false);
  const [isSelectedLinguica, setLinguica] = useState(false);
  const [isSelectedPaleta, setPaleta] = useState(false);
  const [isSelectedAgua, setAgua] = useState(false);
  const [isSelectedRefrigerante, setRefrigerante] = useState(false);
  const [isSelectedCerveja, setCerveja] = useState(false);
  const [isSelectedSuco, setSuco] = useState(false);
  const [isSelectedArroz, setArroz] = useState(false);
  const [isSelectedFarofa, setFarofa] = useState(false);
  const [isSelectedPaodeAlho, setPaodeAlho] = useState(false);
  const [isSelectedQueijoCoalho, setQueijoCoalho] = useState(false);
  const [isSelectedPaoFrances, setPaoFrances] = useState(false);
  const [isSelectedCarvao, setCarvao] = useState(false);
  const [isSelectedPrato, setPrato] = useState(false);
  const [isSelectedTalheres, setTalheres] = useState(false);
  const [isSelectedGuardanapos, setGuardanapos] = useState(false);
  const [isSelectedCopos, setCopos] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >

      {/* <Text style={gStyle.text[theme]}>Produtos</Text> */}
      <Text style={gStyle.title}>{qtdConvidados} convidados</Text>
      <View style={sumarioStyle}>
        <Text style={sumarioTextStyle}>👨 Homens: {data.qtdHomens}</Text>
        <Text style={sumarioTextStyle}>👩 Mulheres: {data.qtdMulheres}</Text>
        <Text style={sumarioTextStyle}>👶 Crianças: {data.qtdCriancas}</Text>
      </View>
      <Text style={gStyle.title}>🍖 Carne Bovina</Text>
      <Text style={labelstyles}><CheckBox value={isSelectedContraFile} onValueChange={selectedContraFile} style={checkboxStyle} /> Contra Filé (R$ {Number(resultadoCalculoContraFile).toFixed(2)})</Text>
      <Text style={labelstyles}><CheckBox value={isSelectedMaminha} onValueChange={selectedMaminha} style={checkboxStyle} /> Maminha (R$ {Number(resultadoCalculoMaminha).toFixed(2)}) </Text>
      <Text style={labelstyles}><CheckBox value={isSelectedCupim} onValueChange={selectedCupim} style={checkboxStyle} /> Cupim (R$ {Number(resultadoCalculoCupim).toFixed(2)})</Text>
      <View style={gStyle.spacer64} />
      <Text style={gStyle.title}>🍗 Frango</Text>
      <Text style={labelstyles}><CheckBox value={isSelectedCoxa} onValueChange={selectedCoxa} style={checkboxStyle} /> Coxa (R$ {Number(resultadoCalculoCoxa).toFixed(2)})</Text>
      <Text style={labelstyles}><CheckBox value={isSelectedCoracao} onValueChange={selectedCoracao} style={checkboxStyle} /> Coração (R$ {Number(resultadoCalculoCoracao).toFixed(2)})</Text>
      <Text style={labelstyles}><CheckBox value={isSelectedAsa} onValueChange={selectedAsa} style={checkboxStyle} /> Asa (R$ {Number(resultadoCalculoAsa).toFixed(2)})</Text>
      <View style={gStyle.spacer64} />
      <Text style={gStyle.title}>🥩 Carne Suína</Text>
      <Text style={labelstyles}><CheckBox value={isSelectedPicanha} onValueChange={selectedPicanha} style={checkboxStyle} /> Picanha (R$ {Number(resultadoCalculoPicanha).toFixed(2)})</Text>
      <Text style={labelstyles}><CheckBox value={isSelectedLinguica} onValueChange={selectedLinguica} style={checkboxStyle} /> Linguiça (R$ {Number(resultadoCalculoLinguica).toFixed(2)})</Text>
      <Text style={labelstyles}><CheckBox value={isSelectedPaleta} onValueChange={selectedPaleta} style={checkboxStyle} />Paleta (R$ {Number(resultadoCalculoPaleta).toFixed(2)})</Text>
      <View style={gStyle.spacer64} />
      <Text style={gStyle.title}>🍺 Bebidas</Text>
      <Text style={labelstyles}><CheckBox value={isSelectedAgua} onValueChange={selectedAgua} style={checkboxStyle} /> Água (R$ {Number(resultadoCalculoAgua).toFixed(2)}) </Text>
      <Text style={labelstyles}><CheckBox value={isSelectedRefrigerante} onValueChange={selectedRefrigerante} style={checkboxStyle} /> Refrigerante (R$ {Number(resultadoCalculoRefrigerante).toFixed(2)}) </Text>
      <Text style={labelstyles}><CheckBox value={isSelectedCerveja} onValueChange={selectedCerveja} style={checkboxStyle} /> Cerveja (R$ {Number(resultadoCalculoCerveja).toFixed(2)}) </Text>
      <Text style={labelstyles}><CheckBox value={isSelectedSuco} onValueChange={selectedSuco} style={checkboxStyle} /> Suco (R$ {Number(resultadoCalculoSuco).toFixed(2)}) </Text>
      <View style={gStyle.spacer64} />
      <Text style={gStyle.title}>🍞 Acompanhamentos</Text>
      <Text style={labelstyles}><CheckBox value={isSelectedArroz} onValueChange={selectedArroz} style={checkboxStyle} /> Arroz (R$ {Number(resultadoCalculoArroz).toFixed(2)}) </Text>
      <Text style={labelstyles}><CheckBox value={isSelectedFarofa} onValueChange={selectedFarofa} style={checkboxStyle} /> Farofa (R$ {Number(resultadoCalculoFarofa).toFixed(2)}) </Text>
      <Text style={labelstyles}><CheckBox value={isSelectedPaodeAlho} onValueChange={selectedPaodeAlho} style={checkboxStyle} /> Pão de Alho (R$ {Number(resultadoCalculoPaodeAlho).toFixed(2)}) </Text>
      <Text style={labelstyles}><CheckBox value={isSelectedQueijoCoalho} onValueChange={selectedQueijoCoalho} style={checkboxStyle} /> Queijo Coalho (R$ {Number(resultadoCalculoQueijoCoalho).toFixed(2)}) </Text>
      <Text style={labelstyles}><CheckBox value={isSelectedPaoFrances} onValueChange={selectedPaoFrances} style={checkboxStyle} /> Pão francês (R$ {Number(resultadoCalculoPaoFrances).toFixed(2)}) </Text>
      <View style={gStyle.spacer64} />
      <Text style={gStyle.title}>🍽 Acessórios</Text>
      <Text style={labelstyles}><CheckBox value={isSelectedCarvao} onValueChange={selectedCarvao} style={checkboxStyle} /> Carvão (R$ {Number(resultadoCalculoCarvao).toFixed(2)}) </Text>
      <Text style={labelstyles}><CheckBox value={isSelectedPrato} onValueChange={selectedPrato} style={checkboxStyle} /> Pratos Descartáveis (R$ {Number(resultadoCalculoPrato).toFixed(2)}) </Text>
      <Text style={labelstyles}><CheckBox value={isSelectedTalheres} onValueChange={selectedTalheres} style={checkboxStyle} /> Talheres Descartáveis (R$ {Number(resultadoCalculoTalheres).toFixed(2)}) </Text>
      <Text style={labelstyles}><CheckBox value={isSelectedGuardanapos} onValueChange={selectedGuardanapos} style={checkboxStyle} /> Guaradanapos (R$ {Number(resultadoCalculoGuardanapos).toFixed(2)}) </Text>
      <Text style={labelstyles}><CheckBox value={isSelectedCopos} onValueChange={selectedCopos} style={checkboxStyle} /> Copos (R$ {Number(resultadoCalculoCopos).toFixed(2)}) </Text>
      <Button style={ButtonStyles} title="Calcular" onPress={() => calcularResultadoFinal()} />
      <View style={resultadoFinalStyle}>
        {(renderResultadoCalculo) ? <><Text style={labelPrecoFinalStyle}>Preço final</Text> <a>R$ {Number(precoFinal).toFixed(2)}</a></> : ""}
        {(renderResultadoCalculo) ? <><Text style={labelPrecoFinalStyle}>Rateio por pessoa</Text> <a>R$ {Number(rateio).toFixed(2)}</a></> : ""}
      </View>
    </ScrollView>

  );
};

function calculaPrecoQuiloCarnePorPessoa(consumoPessoa, precoQuiloCarne, qtdPessoasGenero) {
  return ((consumoPessoa * precoQuiloCarne) / 1000) * qtdPessoasGenero
}

function calcularPrecoUnidadePorPessoa(consumoPessoa, precoUnidade, qtdPessoasGenero) {
  return ((consumoPessoa * precoUnidade) / 2000) * qtdPessoasGenero
}

const checkboxStyle = {
  flexDirection: "row",
  marginBottom: 7,
}

const resultadoFinalStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center", marginBottom: "30px"
}

const ButtonStyles = {
  marginBottom: 10,
}

const labelPrecoFinalStyle = {
  fontSize: 18,
  fontWeight: "bold",
  margin: "3px"
}

const labelstyles = {
  fontSize: 18,
}

const sumarioTextStyle = {
  fontSize: 20,
  fontWeight: "bold",
  margin: "35px"
}

const sumarioStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: "45px"

}

Produtos.navigationOptions = {
  headerTitleStyle: gStyle.headerTitleStyle,
  title: 'Produtos'
};

export default Produtos;