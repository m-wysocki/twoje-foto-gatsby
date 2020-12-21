import React from 'react';
import MainTemplate from '../templates/mainTemplate';
import useSidebar from '../hooks/useSidebar';
import ContentWrapper from '../components/organisms/content-wrapper';
import { Heading } from '../components/atoms/heading';
import { Paragraph } from '../components/atoms/paragraph';
import * as S from '../components/organisms/subpages-with-foto';

const AboutPage = () => {
  useSidebar({
    header: 'O nas',
    date: false,
    paragraph:
      'Tumblr brunch shoreditch, mumblecore forage selvage seitan neutra fingerstache actually la croix sustainable austin. Meh taxidermy',
  });

  const img = 'https://source.unsplash.com/800x800/?photo';
  return (
    <MainTemplate>
      <ContentWrapper>
        <S.Row>
          <S.Content>
            <Heading>Czym się zajmuje?</Heading>
            <Paragraph>
              Moim głównym medium jest fotografia. Traktuję fotografię jako sposó porozumiewania
              się, opowiadania o sobie i otaczającym świecie. W życiu staram się robić to co lubię,
              to co przyjemne, inspirujące i ważne
            </Paragraph>
          </S.Content>
          <S.ImgWrapper>
            <img src={img} alt="Czym się zajmuje?" />
          </S.ImgWrapper>
        </S.Row>
        <S.Row>
          <S.ImgWrapper>
            <img src={img} alt="Dlaczego to robię?" />
          </S.ImgWrapper>
          <S.Content>
            <Heading>Dlaczego to robię?</Heading>
            <Paragraph>
              Robię to, bo sprawia mi to frajdę. Mam wrażenie, że żyjemy w ciągłym pośpiechu, a ja
              próbuję ten pęd na chwilę zatrzymać.
              <br />
              Mam poczucie, że tworzę zapis czasu, który za chwilę zniiknie bezpowrotnie.
            </Paragraph>
            <Paragraph>
              Ktoś kiedyś powiedział, że o każdym człowieku można napisać książkę. Ja chce dodawać
              ilustracje do tych książek.
            </Paragraph>
          </S.Content>
        </S.Row>
        <S.Row>
          <S.Content>
            <Heading>Moje doświadczenie</Heading>
            <Paragraph>
              Pracując i robiąc sesje zdjęciowe poznaje wciąż nowe osoby, w nowych miejscach i
              sytuacjach. Na szczęście nie można wszystkiego przewidzieć i właśnie to
              "nieprzewidziane" jest dla mnie najważniejszym doświadczeniem.
            </Paragraph>
          </S.Content>
          <S.ImgWrapper>
            <img src={img} alt="Moje doświadczenie" />
          </S.ImgWrapper>
        </S.Row>
      </ContentWrapper>
    </MainTemplate>
  );
};

export default AboutPage;
