## 과제2

### 아래 jQuery 코드를 다른 외부 라이브러리 없이 순수 자바스크립트 코드만을 추가하여 실행하였을때 jQuery 라이브러리를 사용했을때와 같은 결과가 나오도록 만들어주세요.

![과제2](https://github.com/zivivle/schoolbell-assignment/assets/123868471/1ad1bd53-d58d-4248-a410-2f71df622322)

1.  **jQuery 코드**:

    ```javascript
    $("#target-1").removeClass("border");
    ```

    **JavaScript 코드**:

    ```javascript
    document.querySelector("#target-1").classList.remove("border");
    ```

    <br/>

2.  **jQuery 코드**:

    ```javascript
    $("#target-1").css("left", "250px");
    ```

    **JavaScript 코드**:

    ```javascript
    document.querySelector("#target-1").style.left = "250px";
    ```

    <br/>

3.  **jQuery 코드**:

    ```javascript
    $(".target-2").removeClass("border").addClass("blue");
    ```

    **JavaScript 코드**:

    ```javascript
    document.querySelector(".target-2").classList.replace("border", "blue");
    ```

    <br/>

4.  **jQuery 코드**:

    ```javascript
    $(".target-2").css({ left: 50, "margin-top": "-15px" });
    ```

    **JavaScript 코드**:

    ```javascript
    const target2 = document.querySelector(".target-2");

    target2.style.left = "50px";
    target2.style.marginTop = "-15px";
    ```

    <br/>

5.  **jQuery 코드**:

    ```javascript
    $("#target-3").fadeOut(() => $("#target-4").addClass("green"));
    ```

    **JavaScript 코드**:

    ```javascript
    const target3 = document.querySelector("#target-3");
    const target4 = document.querySelector("#target-4");

    target3.style.transition = "opacity 1s ease-out";
    target3.style.opacity = "0";

    target3.addEventListener("transitionend", () => {
      target4.classList.add("green");
    });
    ```
