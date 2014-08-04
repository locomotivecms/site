jQuery ->

  unhighlightHoverableIcon = (item)->
    unless $(item).hasClass("active")
      image = $(item).find("img")
      image.attr("src", $(item).attr("data-inactive-src"))

  highlightHoverableIcon = (item, allItems)->
    if item
      allItems.each (index, value)->
        unhighlightHoverableIcon(value)
      image = $(item).find("img")
      image.attr("src", $(item).attr("data-active-src"))

  activateHoverableIcon = (item, allItems)->
    allItems.removeClass 'active'
    item.addClass 'active'
    highlightHoverableIcon(item, allItems)

  activateSection = (section, allSections)->
    allSections.removeClass 'active'
    section.addClass 'active'

  if $("body.page-cms-comparison").length > 0
    pointMenuItems = $('section.points-menu a')
    pointBodies = $('section.points div.point')

    activatePoint = (hash)->
      baseId = hash.slice(1)
      activateHoverableIcon($("#point-menu-item-#{baseId}"), pointMenuItems)
      activateSection($("#point-body-#{baseId}"), pointBodies)

    pointMenuItems
      .mouseenter ->
        event.preventDefault()
        highlightHoverableIcon($(this), pointMenuItems)
      .mouseleave ->
        event.preventDefault()
        unhighlightHoverableIcon($(this), pointMenuItems)

    pointMenuItems.click ->
      activatePoint($(this).attr("href"))

    currentHash = window.location.hash

    if currentHash.length > 0
      activatePoint( currentHash )
    else
      activatePoint( pointMenuItems.first().attr("href") )

  if $("body.page-first-class").length > 0
    faqMenuItems = $('section.faq .faq-menu a')
    faqSections = $('section.faq .faq-section')

    activateFaqSection = (hash)->
      baseId = hash.slice(1)
      activateHoverableIcon $("#faq-menu-item-#{baseId}", faqMenuItems)
      activateSection($("#faq-section-#{baseId}"), faqSections)

    faqMenuItems
      .mouseenter ->
        event.preventDefault()
        highlightHoverableIcon($(this), faqMenuItems)
      .mouseleave ->
        event.preventDefault()
        unhighlightHoverableIcon($(this), faqMenuItems)

    faqMenuItems.click ->
      activateFaqSection($(this).attr("href"))

    currentHash = window.location.hash

    if currentHash.length > 0
      activateFaqSection( currentHash )
    else
      activateFaqSection( faqMenuItems.first().attr("href") )
