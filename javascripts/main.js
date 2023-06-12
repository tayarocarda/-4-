$(document).ready(function() {
  // Смена копыт
  $(".copito").click(function() {
    $(".copito").addClass("none");
    $(".copitoh").removeClass("none");
 });
 $(".copito2").click(function() {
   $(".copito2").addClass("none");
   $(".copitoh2").removeClass("none");
 });
  $(".copito3").click(function() {
  $(".copito3").addClass("none");
  $(".copitoh3").removeClass("none");
 });
  $(".copito4").click(function() {
  $(".copito4").addClass("none");
  $(".copitoh4").removeClass("none");
 });
  $(".copito5").click(function() {
  $(".copito5").addClass("none");
  $(".copitoh5").removeClass("none");
 });
  $(".copito6").click(function() {
  $(".copito6").addClass("none");
  $(".copitoh6").removeClass("none");
 });
  $(".copito8").click(function() {
  $(".copito8").addClass("none");
  $(".copitoh8").removeClass("none");
 });
  $(".copito9").click(function() {
  $(".copito9").addClass("none");
  $(".copitoh9").removeClass("none");
 });
  $(".copito9").click(function() {
  $(".copito9").addClass("none");
  $(".copitoh9").removeClass("none");
 });
  $(".copito10").click(function() {
  $(".copito10").addClass("none");
  $(".copitoh10").removeClass("none");
 });
  $(".copito11").click(function() {
  $(".copito11").addClass("none");
  $(".copitoh11").removeClass("none");
 });
  $(".copito12").click(function() {
  $(".copito12").addClass("none");
  $(".copitoh12").removeClass("none");
 });
  $(".copito13").click(function() {
  $(".copito13").addClass("none");
  $(".copitoh13").removeClass("none");
 });
  $(".copito14").click(function() {
  $(".copito14").addClass("none");
  $(".copitoh14").removeClass("none");
 });
  $(".copito15").click(function() {
  $(".copito15").addClass("none");
  $(".copitoh15").removeClass("none");
 });
  $(".copito16").click(function() {
  $(".copito16").addClass("none");
  $(".copitoh16").removeClass("none");
 });
  $(".copito17").click(function() {
  $(".copito17").addClass("none");
  $(".copitoh17").removeClass("none");
 });
  $(".copito18").click(function() {
  $(".copito18").addClass("none");
  $(".copitoh18").removeClass("none");
 });
  $(".copito19").click(function() {
  $(".copito19").addClass("none");
  $(".copitoh19").removeClass("none");
 });
  $(".copito20").click(function() {
  $(".copito20").addClass("none");
  $(".copitoh20").removeClass("none");
 });
  $(".copito22").click(function() {
  $(".copito22").addClass("none");
  $(".copitoh22").removeClass("none");
 });
  $(".copito23").click(function() {
  $(".copito23").addClass("none");
  $(".copitoh23").removeClass("none");
 });
  $(".copito24").click(function() {
  $(".copito24").addClass("none");
  $(".copitoh24").removeClass("none");
 });
  $(".copito23").click(function() {
  $(".copito23").addClass("none");
  $(".copitoh23").removeClass("none");
 });
// Листание книги и отзывов
 $(".circle").click(function() {
 $(".book").removeClass("none");
 $(".book2").addClass("none");
 $(".book3").addClass("none");
 $(".book4").addClass("none");
 $(".circlefilled").removeClass("none");
 $(".circlefilled2").addClass("none");
 $(".circlefilled3").addClass("none");
 $(".circlefilled4").addClass("none");
 $(".circle2").removeClass("none");
 $(".circle3").removeClass("none");
 $(".circle4").removeClass("none");
});
 $(".circle2").click(function() {
 $(".book").addClass("none");
 $(".book2").removeClass("none");
 $(".book3").addClass("none");
 $(".book4").addClass("none");
 $(".circlefilled").addClass("none");
 $(".circlefilled2").removeClass("none");
 $(".circlefilled3").addClass("none");
 $(".circlefilled4").addClass("none");
 $(".circle").removeClass("none");
 $(".circle3").removeClass("none");
 $(".circle4").removeClass("none");
});
 $(".circle3").click(function() {
 $(".book").addClass("none");
 $(".book2").addClass("none");
 $(".book3").removeClass("none");
 $(".book4").addClass("none");
 $(".circlefilled").addClass("none");
 $(".circlefilled2").addClass("none");
 $(".circlefilled3").removeClass("none");
 $(".circlefilled4").addClass("none");
 $(".circle").removeClass("none");
 $(".circle2").removeClass("none");
 $(".circle4").removeClass("none");
});
 $(".circle4").click(function() {
 $(".book").addClass("none");
 $(".book2").addClass("none");
 $(".book3").addClass("none");
 $(".book4").removeClass("none");
 $(".circlefilled").addClass("none");
 $(".circlefilled2").addClass("none");
 $(".circlefilled3").addClass("none");
 $(".circlefilled4").removeClass("none");
 $(".circle").removeClass("none");
 $(".circle2").removeClass("none");
 $(".circle3").removeClass("none");
});
 $(".circle5").click(function() {
 $(".review").removeClass("none");
 $(".review2").addClass("none");
 $(".review3").addClass("none");
 $(".circle5f").removeClass("none");
 $(".circle6f").addClass("none");
 $(".circle7f").addClass("none");
 $(".circle6").removeClass("none");
 $(".circle7").removeClass("none");
});
 $(".circle6").click(function() {
 $(".review2").removeClass("none");
 $(".review").addClass("none");
 $(".review3").addClass("none");
 $(".circle5f").addClass("none");
 $(".circle6f").removeClass("none");
 $(".circle7f").addClass("none");
 $(".circle5").removeClass("none");
 $(".circle7").removeClass("none");
});
 $(".circle7").click(function() {
 $(".review3").removeClass("none");
 $(".review2").addClass("none");
 $(".review").addClass("none");
 $(".circle5f").addClass("none");
 $(".circle6f").addClass("none");
 $(".circle7f").removeClass("none");
 $(".circle5").removeClass("none");
 $(".circle6").removeClass("none");
});
// Анимация главного экрана
 $(".bubble").hover(
  function () {
    $(".bubble").addClass("none");
    $(".fears").addClass("none");
    $(".bubbleclick").removeClass("none");
  }
 );
 $("body").hover(
  function () {
    $(".bubbleclick").addClass("none");
    $(".bubble").removeClass("none");
    $(".fears").removeClass("none");
  }
 );
 $(".bubble2").hover(
  function () {
   $(".bubble2").addClass("none");
   $(".way").addClass("none");
   $(".bubbleclick2").removeClass("none");
  }
 );
 $("body").hover(
  function () {
    $(".bubbleclick2").addClass("none");
    $(".bubble2").removeClass("none");
    $(".way").removeClass("none");
  }
 );
 $(".bubble3").hover(
  function () {
   $(".bubble3").addClass("none");
   $(".inspire").addClass("none");
   $(".bubbleclick3").removeClass("none");
  }
 );
 $("body").hover(
  function () {
    $(".bubbleclick3").addClass("none");
    $(".bubble3").removeClass("none");
    $(".inspire").removeClass("none");
  }
 );
 $(".bubble4").hover(
  function () {
   $(".bubble4").addClass("none");
   $(".dance").addClass("none");
   $(".bubbleclick4").removeClass("none");
  }
 );
 $("body").hover(
  function () {
    $(".bubbleclick4").addClass("none");
    $(".bubble4").removeClass("none");
    $(".dance").removeClass("none");
  }
 );
 $(".bubble5").hover(
  function () {
   $(".bubble5").addClass("none");
   $(".puanti").addClass("none");
   $(".bubbleclick5").removeClass("none");
  }
 );
 $("body").hover(
  function () {
    $(".bubbleclick5").addClass("none");
    $(".bubble5").removeClass("none");
    $(".puanti").removeClass("none");
  }
 );
  $(".bubble6").hover(
   function() {
    $(".bubble6").addClass("none");
    $(".perform").addClass("none");
    $(".bubbleclick6").removeClass("none");
   }
 );
 $("body").hover(
  function () {
    $(".bubbleclick6").addClass("none");
    $(".bubble6").removeClass("none");
    $(".perform").removeClass("none");
  }
 );
  $(".bubble7").hover(
   function() {
    $(".bubble7").addClass("none");
    $(".confidence").addClass("none");
    $(".bubbleclick7").removeClass("none");
   }
  );
  $("body").hover(
   function () {
    $(".bubbleclick7").addClass("none");
    $(".bubble7").removeClass("none");
    $(".confidence").removeClass("none");
   }
  );
  // Переворот плакатов
  $(".poster").hover(
   function () {
    $(".poster").addClass("none");
    $(".plakat").removeClass("none")
   }
  );
  $("body").hover(
   function () {
    $(".plakat").addClass("none");
    $(".poster").removeClass("none");
   }
  );
  $(".poster2").hover(
   function () {
    $(".poster2").addClass("none");
    $(".plakat2").removeClass("none")
   }
  );
  $("body").hover(
    function () {
      $(".plakat2").addClass("none");
      $(".poster2").removeClass("none");
    }
  );
  $(".poster3").hover(
   function () {
    $(".poster3").addClass("none");
    $(".plakat3").removeClass("none")
   }
  );
  $("body").hover(
   function () {
    $(".plakat3").addClass("none");
    $(".poster3").removeClass("none");
   }
  );
  $(".poster4").hover(
   function () {
    $(".poster4").addClass("none");
    $(".plakat4").removeClass("none")
   }
  );
  $("body").hover(
   function () {
    $(".plakat4").addClass("none");
    $(".poster4").removeClass("none");
   }
  );
  $(".poster5").hover(
    function () {
      $(".poster5").addClass("none");
      $(".plakat5").removeClass("none")
    }
  );
  $("body").hover(
    function () {
      $(".plakat5").addClass("none");
      $(".poster5").removeClass("none");
    }
  );
  $(".poster6").hover(
    function () {
      $(".poster6").addClass("none");
      $(".plakat6").removeClass("none")
    }
  );
  $("body").hover(
    function () {
      $(".plakat6").addClass("none");
      $(".poster6").removeClass("none");
    }
  );
  $(".poster7").hover(
    function () {
      $(".poster7").addClass("none");
      $(".plakat7").removeClass("none")
    }
  );
  $("body").hover(
    function () {
      $(".plakat7").addClass("none");
      $(".poster7").removeClass("none");
    }
  );
  $(".poster9").hover(
    function () {
      $(".poster9").addClass("none");
      $(".plakat9").removeClass("none")
    }
  );
  $("body").hover(
    function () {
      $(".plakat9").addClass("none");
      $(".poster9").removeClass("none");
    }
  );
     // Смена состояний кнопок
  $(".knopka").click(function() {
  $(".form").removeClass("none");
  });
  $(".knopka2").click(function() {
  $(".form2").removeClass("none");
  });
  $(".knopka3").click(function() {
  $(".form3").removeClass("none");
  });
  $(".knopka4").click(function() {
  $(".form4").removeClass("none");
  });
  $(".knopka5").click(function() {
  $(".form5").removeClass("none");
  });
  $(".knopka6").click(function() {
  $(".form6").removeClass("none");
  });
  $(".knopka7").click(function() {
  $(".form7").removeClass("none");
  });
  $(".knopka9").click(function() {
  $(".form9").removeClass("none");
  });
   // Закрытие форм
  $(".cross").click(function() {
  $(".form").addClass("none");
  $(".form4").addClass("none");
  $(".form5").addClass("none");
  $(".form6").addClass("none");
  $(".form7").addClass("none");
  $(".form9").addClass("none");
  });
  $(".cross2").click(function() {
  $(".form2").addClass("none");
  $(".plakat2").addClass("none");
  $(".poster2").removeClass("none");
  });
  $(".cross3").click(function() {
  $(".form3").addClass("none");
  $(".plakat3").addClass("none");
  $(".poster3").removeClass("none");
  });
  $(".knopkaform").click(function() {
  $(".knopkaform").addClass("none");
  $(".knopkaformcl").removeClass("none");
  });
  $(".knopkaform2").click(function() {
  $(".knopkaform2").addClass("none");
  $(".knopkaformcl2").removeClass("none");
  });
  $(".knopkaform3").click(function() {
  $(".knopkaform3").addClass("none");
  $(".knopkaformcl3").removeClass("none");
  });
  $(".knopkaform4").click(function() {
  $(".knopkaform4").addClass("none");
  $(".knopkaformcl4").removeClass("none");
  });
  $(".knopkaform5").click(function() {
  $(".knopkaform5").addClass("none");
  $(".knopkaformcl5").removeClass("none");
  });
  $(".knopkaform6").click(function() {
  $(".knopkaform6").addClass("none");
  $(".knopkaformcl6").removeClass("none");
  });
  $(".knopkaform7").click(function() {
  $(".knopkaform7").addClass("none");
  $(".knopkaformcl7").removeClass("none");
  });
  $(".knopkaform9").click(function() {
  $(".knopkaform9").addClass("none");
  $(".knopkaformcl9").removeClass("none");
  });
  $(".button").hover(function(){
  $(".button").addClass("none");
  $(".buttonh").removeClass("none");
  });
  $("body").hover(
   function () {
    $(".buttonh").addClass("none");
    $(".button").removeClass("none");
   }
  );
   // Переворачивание карточек
  $(".card").click(function() {
  $(".card").addClass("none");
  $(".cardcl").removeClass("none");
  });
  $(".cardcl").click(function() {
  $(".cardcl").addClass("none");
  $(".card").removeClass("none");
  });
  $(".card2").click(function() {
  $(".card2").addClass("none");
  $(".cardcl2").removeClass("none");
  });
  $(".cardcl2").click(function() {
  $(".cardcl2").addClass("none");
  $(".card2").removeClass("none");
  });
  $(".card3").click(function() {
  $(".card3").addClass("none");
  $(".cardcl3").removeClass("none");
  });
  $(".cardcl3").click(function() {
  $(".cardcl3").addClass("none");
  $(".card3").removeClass("none");
  });
  $(".card4").click(function() {
  $(".card4").addClass("none");
  $(".cardcl4").removeClass("none");
  });
  $(".cardcl4").click(function() {
  $(".cardcl4").addClass("none");
  $(".card4").removeClass("none");
  });
  $(".card5").click(function() {
  $(".card5").addClass("none");
  $(".cardcl5").removeClass("none");
  });
  $(".cardcl5").click(function() {
  $(".cardcl5").addClass("none");
  $(".card5").removeClass("none");
  });
  $(".card6").click(function() {
  $(".card6").addClass("none");
  $(".cardcl6").removeClass("none");
  });
  $(".cardcl6").click(function() {
  $(".cardcl6").addClass("none");
  $(".card6").removeClass("none");
  });
  $(".card7").click(function() {
  $(".card7").addClass("none");
  $(".cardcl7").removeClass("none");
  });
  $(".cardcl7").click(function() {
  $(".cardcl7").addClass("none");
  $(".card7").removeClass("none");
  });
  $(".card8").click(function() {
  $(".card8").addClass("none");
  $(".cardcl8").removeClass("none");
  });
  $(".cardcl8").click(function() {
  $(".cardcl8").addClass("none");
  $(".card8").removeClass("none");
  });
 // Форма для вопросов
  $(".sendform").click(function() {
  $(".sendform").addClass("none");
  $(".sendformcl").removeClass("none");
  });
 // Изменение размеров
  $(".raz").click(function() {
  $(".raz").addClass("none");
  $(".razcl").removeClass("none");
  $(".razcl2").addClass("none");
  $(".raz2").removeClass("none");
  $(".razcl3").addClass("none");
  $(".raz3").removeClass("none");
  });
  $(".raz2").click(function() {
  $(".raz2").addClass("none");
  $(".razcl2").removeClass("none");
  $(".razcl").addClass("none");
  $(".raz").removeClass("none");
  $(".razcl3").addClass("none");
  $(".raz3").removeClass("none");
  });
  $(".raz3").click(function() {
  $(".raz3").addClass("none");
  $(".razcl3").removeClass("none");
  $(".razcl").addClass("none");
  $(".raz").removeClass("none");
  $(".razcl2").addClass("none");
  $(".raz2").removeClass("none");
  });
// Всплывающее окно
  $(".clicker").click(function() {
  $(".okno").removeClass("none");
  });
  $(".cross5").click(function() {
  $(".okno").addClass("none");
  });
// Кнопка купить
  $(".buy").click(function() {
  $(".buycl").removeClass("none");
  });
  $(".buy2").click(function() {
  $(".buy2cl").removeClass("none");
  });
  $(".buy3").click(function() {
  $(".buy3cl").removeClass("none");
  });
  $(".buy4").click(function() {
  $(".buy4cl").removeClass("none");
  });
  $(".buy5").click(function() {
  $(".buy5cl").removeClass("none");
  });
  $(".buy6").click(function() {
  $(".buy6cl").removeClass("none");
  });
  $(".buy7").click(function() {
  $(".buy7cl").removeClass("none");
  });
  $(".buy8").click(function() {
  $(".buy8cl").removeClass("none");
  });
  $(".buy9").click(function() {
  $(".buy9cl").removeClass("none");
 });
// Клики в мобильной версии
  $(".clickme").click(function() {
  $(".book").addClass("none");
  $(".book2").removeClass("none");
  });
  $(".clickme2").click(function() {
  $(".book2").addClass("none");
  $(".book").removeClass("none");
  });
  $(".clickme3").click(function() {
  $(".review").addClass("none");
  $(".review2").removeClass("none");
  });
  $(".clickme4").click(function() {
  $(".review2").addClass("none");
  $(".review").removeClass("none");
  });
 $(".poster").click(
   function () {
    $(".poster").addClass("none");
    $(".plakat").removeClass("none")
   }
  );
  $(".plakat").click(
    function () {
     $(".poster").removeClass("none");
     $(".plakat").addClass("none")
    }
   );
  $(".poster2").click(
   function () {
     $(".plakat2").removeClass("none")
   }
  );
  $(".plakat2").click(
   function () {
     $(".poster2").removeClass("none");
     $(".plakat2").addClass("none")
   }
  );
  $(".poster3").click(
    function () {
     $(".plakat3").removeClass("none")
    }
  );
  $(".plakat3").click(
    function () {
      $(".poster3").removeClass("none");
      $(".plakat3").addClass("none")
    }
  )
  $(".poster4").click(
    function () {
     $(".plakat4").removeClass("none")
    }
  );
  $(".plakat4").click(
    function () {
     $(".poster4").removeClass("none");
     $(".plakat4").addClass("none")
    }
  );
  $(".poster5").click(
    function () {
     $(".plakat5").removeClass("none")
    }
  );
  $(".plakat5").click(
    function () {
     $(".poster5").removeClass("none");
     $(".plakat5").addClass("none")
    }
  );
  $(".poster6").click(
    function () {
     $(".plakat6").removeClass("none")
    }
  );
  $(".plakat6").click(
    function () {
     $(".poster6").removeClass("none");
     $(".plakat6").addClass("none")
    }
  );
  $(".poster7").click(
    function () {
     $(".plakat7").removeClass("none")
    }
  );
  $(".plakat7").click(
    function () {
     $(".poster7").removeClass("none");
     $(".plakat7").addClass("none")
    }
  );
  $(".poster9").click(
    function () {
     $(".plakat9").removeClass("none")
    }
  );
  $(".plakat9").click(
    function () {
     $(".poster9").removeClass("none");
     $(".plakat9").addClass("none")
    }
  );
});
