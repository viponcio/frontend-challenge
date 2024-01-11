import Modal from '@/core/components/modal';
import {
  ArrowRightOnRectangleIcon,
  BanknotesIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import React from 'react'

type Props = {
  show: boolean
  toggle: Function
}

export default function HowToPlay({ show, toggle }: Props) {
  return (
    <Modal show={show} toggle={toggle}>
      <div className="py-0">
        <section
          className="modal-header py-2 flex justify-between items-center px-3 relative"
          style={{
            position: 'sticky',
            top: 0,
            backgroundColor: 'white',
            zIndex: 9999,
          }}
        >
          <h1 className="text-1xl uppercase font-bold pl-1 flex gap-4">
            <BanknotesIcon className="w-6 h-6" /> Regras do Jogo - Moto Grau
          </h1>
          <button
            onClick={(_) => toggle()}
            className="btn p-0 btn-sm hover:bg-transparent btn-ghost "
          >
            <XMarkIcon className="w-6 h-6"/>
          </button>
        </section>
        <div className="p-4 text-sm ">
          <div className="grid lg:flex gap-8 align-center py-4">
            <p>
              A Hypetech é o último grito em entretenimento de jogo
              para uma nova geração de jogadores. Poderá ganhar várias
              vezes essa quantia em apenas alguns segundos! Nossos
              Jogos Turbo baseiam-se em uma forma que pode ser
              verificado no momento e é considerado como a única
              garantia real de funcionamento de justiça na indústria
              do jogo.
            </p>
          </div>
          <hr />
          <div className="p-3">
            <h1 className=' uppercase font-bold flex gap-4'>Instruções:</h1>
            <div className="gap-12 mb-8">
              <div>
                <div className="description-box">
                  <p className="font-semibold mx-auto" style={{ lineHeight: '2' }}>
                    Passo 1-Digite o valor desejado e clique em APOSTAR.
                  </p>
                </div>
                <img
                  src="../images/HTP/motograu/step-1.png"
                />
              </div>
              <div>
                <div className="description-box">
                  <p
                    className="font-semibold mx-auto"
                    style={{ lineHeight: '2' }}
                  >
                    Passo 2-Veja como o motoqueiro dá o grau e as
                    probabilidades sobem!
                  </p>
                </div>
                <img
                  src="../images/HTP/motograu/step-2.png"
                />
                
              </div>
              <div>
                <div className="description-box">
                  <p
                    className="font-semibold mx-auto"
                    style={{ lineHeight: '2' }}
                  >
                    Passo 3-Retirar antes do motoqueiro perder o equilibrio e
                    ganhar X vezes!
                  </p>
                </div>
                <img
                  src="../images/HTP/motograu/step-3.png"
                />
              </div>
            </div>
            <p className="gap-4 ">
              No entanto, não se esqueça que tem um limite de tempo.
              Tem de se retirar antes do motoqueiro perder o
              equilibrio, caso contrário perderá a sua aposta. Jogar{' '}
              <b>Moto Grau</b> é puro jogo de azar! É aqui que se
              arrisca e ganha. Tudo depende de si!
            </p>
            <p className="text-base font-bold mt-6 mb-6">
              Como jogar e quais são as regras?
            </p>
            <li className="list">
              Para fazer uma aposta, você precisa selecionar o valor
              desejado e clicar no botão <b>"APOSTAR"</b>.
            </li>
            <li className="list">
              Dito isto, não há necessidade de se limitar a apenas uma
              aposta de cada vez. Você pode fazer duas apostas ao
              mesmo tempo usando o painel de apostas esquerdo e
              direito.
            </li>
            <li className="list">
              Para retirar os seus ganhos, precisa de clicar no botão
              <b>"RETIRAR"</b>. Os seus ganhos consistem no total da
              sua aposta multiplicado pelo multiplicador de cashout.
            </li>
            <li className="list">
              Se não se retirar antes do motoqueiro perder o
              equilibrio, a aposta é perdida.
            </li>
            <p className="text-base font-bold mt-6 mb-6">
              Aposta automática e retirada automática
            </p>
            <li className="list">
              A aposta automática pode ser ativada no painel de
              qualquer aposta ao clicar na aba <b>Auto</b> em cima do
              botão "Apostar". Nesse caso, as apostas são feitas
              automaticamente. No entanto, para retirar os ganhos,
              você ainda precisa pressionar o botão "Retirar" a cada
              rodada.
            </li>
            <li className="list">
              Se você deseja automatizar completamente o jogo, é
              possível configurar a retirada automática de ganhos.
              Para fazer isso, você deve definir no painel de apostas
              o valor de "Auto Retirar" e quantas vezes deseja repetir
              esta jogada no campo "Quantidade", e então, iniciar o
              jogo automático clicando em <b>"APOSTA AUTO"</b>.
            </li>

            <p className="text-base font-bold mt-6 mb-6">
              A nossa interface de jogo
            </p>
            <p className="text-light">
              Apostas ao vivo e Estatísticas:
            </p>
            <li className="list">
              À esquerda (sob o quadro de apostas na interface móvel)
              existe o painel "Apostas ao vivo". Mostra as apostas que
              foram feitas na rodada atual.
            </li>
            <li className="list">
              O painel <b>"Histórico"</b> contém informações sobre as
              apostas feitas e os levantamentos durante todo o tempo
              do jogo.
            </li>
            <li className="list">
              O painel <b>"LANCES ANTERIORES"</b> que ha acima da tela
              do jogo contém informações sobre os últimos resultados
              que saíram durante os últimos jogos.
            </li>
            <p className=" text-light mt-6">
              Conversa dentro do jogo:
            </p>
            <li className="list">
              No canto superior direito, há uma barra de bate-papo
              geral. Ele é projetado para se comunicar com outros
              jogadores. Além disso, o bate-papo apresenta
              automaticamente informações sobre o recebimento de
              grandes ganhos.
            </li>

            <p className="text-ligh mt-6">
              Lidar com problemas técnicos:
            </p>
            <li className="list">
              O operador não é responsável pela perda de uma aposta
              devido a uma interrupção da conexão com a Internet.
              Recomendamos jogar se você tiver uma conexão estável.
            </li>
            <li className="list">
              Caso ocorra uma falha no equipamento de jogo ou no
              software do jogo, todas as apostas e pagamentos serão
              confiscados. Entretanto, as apostas serão reembolsadas
              na íntegra aos jogadores afetados no prazo de 1 hora.
            </li>
          </div>
        </div>
      </div>
    </Modal>
  )
}
