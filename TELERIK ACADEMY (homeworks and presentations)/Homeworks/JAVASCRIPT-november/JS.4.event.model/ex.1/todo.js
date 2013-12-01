(function () {
  'use strict';

  function addEventListener(selector, eventType, listener) {
    document.querySelector(selector).addEventListener(eventType, listener, false);
  }

  function toArray(list) {
    return Array.prototype.slice.apply(list || []);
  }

  var Todo = (function () {
    function getCheckedItems() {
      return toArray(list.querySelectorAll(':checked')).map(function (checkedEl) {
        return checkedEl.parentElement;
      });
    }
    var list = document.querySelector('#todo-list');

    return {
      addItem: function (content) {
        var todoItem = document.createElement('li'),
          itemCheckbox = document.createElement('input');

        itemCheckbox.type = 'radio';
        itemCheckbox.name = 'selected';
        todoItem.appendChild(itemCheckbox);

        todoItem.appendChild(document.createTextNode(content));

        list.appendChild(todoItem);
      },
      hideSelected: function () {
        getCheckedItems().forEach(function (item) {
          item.classList.add('hidden');
        });
      },
      showAll: function () {
        toArray(list.querySelectorAll('.hidden')).forEach(function (hidden) {
          hidden.classList.remove('hidden');
        });
      },
      deleteSelected: function () {
        getCheckedItems().forEach(function (item) {
          item.parentElement.removeChild(item);
        });
      }
    };
  })();
//set event on Add button
  addEventListener('#create-todo', 'submit', function (event) {
    event.preventDefault();

    Todo.addItem(event.target.item.value);
    event.target.item.value = '';
  });
//set event on Delete button
  addEventListener('#delete-item', 'click', function (event) {
    Todo.deleteSelected();
  });
//set event on Hide button 
  addEventListener('#hide-item', 'click', function (event) {
    Todo.hideSelected();
  });
//set event on Show All button
  addEventListener('#show-item', 'click', function (event) {
    Todo.showAll();
  });
})();