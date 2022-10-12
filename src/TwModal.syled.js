import styled from "styled-components";

export const Backdrop = styled.div.attrs(({open}) => ({
  className: `modal fixed top-0 left-0 w-full h-full bg-[#0002] z-10 ${
    open ? "scale-100" : "scale-0"
  }`
}))``;


export const ModalContent = styled.div.attrs( ({open}) => ({
  className: `modal-content relative top-10
  rounded-lg w-4/5 max-w-xl mx-auto bg-white transition-transform duration-300 z-20 ${
   open ? "scale-100" : "scale-0"
 }`
}))``

export const CloseMark = styled.span.attrs({
  className : `close absolute top-0 right-3 w-min text-4xl font-bold cursor-pointer text-red-500`
})``