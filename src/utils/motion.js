export function textVariant(delay) {
   return {
      hidden: { y: -50, opacity: 0 },
      show: { y: 0, opacity: 1, transition: { type: "spring", duration: 1.25, delay: delay } },
   }
}

export function fadeIn(direction, type, delay, duration) {
   const directionRight = direction === "right" ? -100 : 0
   const directionDown = direction === "down" ? -100 : 0

   return {
      hidden: {
         x: direction === "left" ? 100 : directionRight,
         y: direction === "up" ? 100 : directionDown,
         opacity: 0,
      },
      show: {
         x: 0,
         y: 0,
         opacity: 1,
         transition: { type: type, delay: delay, duration: duration, ease: "easeOut" },
      },
   }
}

export function zoomIn(delay, duration) {
   return {
      hidden: { scale: 0, opacity: 0 },
      show: {
         scale: 1,
         opacity: 1,
         transition: { type: "tween", delay: delay, duration: duration, ease: "easeOut" },
      },
   }
}

export function slideIn(direction, type, delay, duration) {
   const directionRightPersen = direction === "right" ? "100%" : 0
   const directionDownPersen = direction === "down" ? "100%" : 0

   return {
      hidden: {
         x: direction === "left" ? "-100%" : directionRightPersen,
         y: direction === "up" ? "100%" : directionDownPersen,
      },
      show: {
         x: 0,
         y: 0,
         transition: { type: type, delay: delay, duration: duration, ease: "easeOut" },
      },
   }
}

export function staggerContainer(staggerChildren, delayChildren) {
   return {
      hidden: {},
      show: { transition: { staggerChildren: staggerChildren, delayChildren: delayChildren || 0 } },
   }
}
